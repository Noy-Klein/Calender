class EventsHandler {
    constructor(eventsRepository, eventsRenderer) {
        this.eventsRepository = eventsRepository;
        this.eventsRenderer = eventsRenderer;
        this.cm = this.eventsRepository.getMonth();
    }

    modalClick() {
        $('body').on('click', 'td', (event) => {
            // console.log(event.target.id)
            let id = parseInt($(event.target).find('p').text());
            console.log(id);
            if (id == '') {
                id = $(event.target).text();
                console.log(id);
            }
            this.eventsRenderer.renderModel(this.eventsRepository.events, this.cm, id);
        })
    }

    onLoad() {
        this.eventsRepository.getEvents().then(() => {
            this.eventsRenderer.renderEvents(this.eventsRepository.events, this.cm);
        })
    }

    nextMonth() {
        $("#next").on('click', () => {
            this.eventsRenderer.renderMonth(this.cm + 1)
            this.cm++
            console.log(this.cm)
            const nextButton = $('#next')
            const previousButton = $('#previous')
            if (this.cm == 11) { nextButton.css('display', 'none') }
            if (this.cm == 10) { nextButton.css('display', 'block') }
            if (this.cm == 1) { previousButton.css('display', 'block') }
            this.eventsRenderer.renderEvents(this.eventsRepository.events, this.cm);
        })
    }
    previousMonth() {
        $("#previous").on('click', () => {
            this.eventsRenderer.renderMonth(this.cm - 1)
            this.cm--
            console.log(this.cm)
            const nextButton = $('#next')
            const previousButton = $('#previous')
            if (this.cm == 1) { previousButton.css('display', 'block') }
            if (this.cm == 0) { previousButton.css('display', 'none') }
            if (this.cm == 10) { nextButton.css('display', 'block') }
            this.eventsRenderer.renderEvents(this.eventsRepository.events, this.cm);
        })
    }

    onLoadMonth() {
        this.eventsRenderer.renderMonth(this.eventsRepository.getMonth());
    }

    registerAddEvent() {
        const model = $("#mymodel");
        const button = $(".add");
        button.on('click', function () {
            model.css('display', 'block');
        })
    }

    close() {
        const span = document.getElementsByClassName("close")[0];
        const model = $("#mymodel");
        span.onclick = function () {
            model.css('display', 'none');
        }
    }

    addEventDetails() {
        $('.submit').on("click", () => {
            let title = $(".title").val();
            let day = $(".day").val();
            let month = $('.model-content').find('.month').val();
            console.log(month);
            let time = $(".time").val();
            let location = $(".location").val();
            let image = $(".image").val();
            if (title == '' || day == '' || month == '') {
                if (title == "") { alert("Please enter title") }
                if (day == "") { alert("Please enter day") }
                if (month == "") { alert("Please enter month") }
            } else {
                title = $(".title").val();
                day = $(".day").val();
                month = $('.model-content').find('.month').val();
                this.eventsRepository.addEvent(title, day, month, time, location, image).then(() => {
                    this.eventsRenderer.renderEvents(this.eventsRepository.events, this.cm);
                    const model = $("#mymodel");
                    model.css('display', 'none');
                })
                $(".title").val('');
                $(".day").val('');
                $(".month").val('');
                $(".time").val('');
                $(".location").val('');
                $(".image").val('');
            }

        })

        window.onload = function () {
            var d = new Date();
            var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var month = d.getMonth();   //0-11
            var year = d.getFullYear(); //2014
            var first_date = month_name[month] + " " + 1 + " " + year;
            //September 1 2014
            var tmp = new Date(first_date).toDateString();
            //Mon Sep 01 2014 ...
            var first_day = tmp.substring(0, 3);    //Mon
            var day_name = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            var day_no = day_name.indexOf(first_day);   //1
            var days = new Date(year, month + 1, 0).getDate();    //30
            //Tue Sep 30 2014 ...
            var calendar = get_calendar(day_no, days);
            document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
            document.getElementById("calendar-dates").appendChild(calendar);
        }

        function get_calendar(day_no, days) {
            var table = document.createElement('table');
            var tr = document.createElement('tr');
            //row for the day letters
            for (var i = 0; i <= 6; i++) {
                var th = document.createElement('th');
                th.innerHTML = "MTWTFSS"[i];
                tr.appendChild(th);
            }
            table.appendChild(tr);
            //create 2nd row
            tr = document.createElement('tr');
            var i;
            for (i = 0; i <= 6; i++) {
                if (i == day_no) {
                    break;
                }
                var td = document.createElement('td');
                td.innerHTML = "";
                tr.appendChild(td);
            }
            var count = 1;
            for (; i <= 6; i++) {
                var td = document.createElement('td');
                td.innerHTML = count;
                count++;
                tr.appendChild(td);
            }
        }
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
    }

}

export default EventsHandler;
