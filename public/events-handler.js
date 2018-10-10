class EventsHandler {
    constructor(eventsRepository, eventsRenderer) {
        this.eventsRepository = eventsRepository;
        this.eventsRenderer = eventsRenderer;
        this.cm = this.eventsRepository.getMonth();
    }

    modalClick(){
        $('body').on('click','td',(event)=>{
            // console.log(event.target.id)
            let id = parseInt($(event.target).find('p').text());
            console.log(id);
            if(id==''){
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
            if (this.cm == 11) {nextButton.css('display', 'none')}
            if (this.cm == 10) {nextButton.css('display', 'block')}
            if (this.cm == 1) {previousButton.css('display', 'block')}
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
            if (this.cm == 1 ) {previousButton.css('display', 'block')}
            if (this.cm == 0) {previousButton.css('display', 'none')}
            if (this.cm == 10) {nextButton.css('display', 'block')}
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

        
    }
    
}

export default EventsHandler;
