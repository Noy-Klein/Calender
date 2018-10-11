class EventsRenderer {
    constructor() {
        this.months = [{ name: 'January 2018', num: 1 }, { name: 'February 2018', num: 2 }, { name: 'March 2018', num: 3 },
        { name: 'April 2018', num: 4 }, { name: 'May 2018', num: 5 }, { name: 'June 2018', num: 6 }, { name: 'July 2018', num: 7 },
        { name: 'August 2018', num: 8 }, { name: 'September 2018', num: 9 }, { name: 'October 2018', num: 10 },
        { name: 'November 2018', num: 11 }, { name: 'December 2018', num: 12 }];
    }

    renderHolidays(holidays) {
        for (let h of holidays) {
            console.log(h)
            
        }
    }

    renderEvents(events, cm) {
        let monthNum;
        for (let m in this.months) {
            if (cm == this.months[m].num) {
                monthNum = this.months[m].num;
            }
        }
        $('.dim').empty();
        // $('.model-body').find('p').append('fine')
        for (let e of events) {
            if (e.month == cm + 1) {
                for (let i = 1; i < 32; i++) {
                    if (e.day == i) {
                        let source = $('#event-template').html();
                        let template = Handlebars.compile(source);
                        let newHTML = template(e);
                        $('#' + i + '').append(newHTML);

                    }
                }
            }
        }
    }

    renderModel(events, cm, id) {
        console.log('entered');
        $('.modal-body').find('p').empty();
        for (let e of events) {
            if (e.month == cm + 1) {
                // for (let i = 1; i < 32; i++) {
                if (e.day == id) {
                    // $('.modal-body').find('p').empty();
                    let source = $('#modal-template').html();
                    let template = Handlebars.compile(source);
                    let newHTML = template(e);
                    $('.modal-body').find('p').append(newHTML);
                    console.log(newHTML);
                }
            }
        }
    }

    renderMonth(i) {
        $('.header').empty()
        let source = $('#header-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(this.months[i]);
        $('.header').append(newHTML);
    }
}

export default EventsRenderer;