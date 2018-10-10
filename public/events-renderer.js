class EventsRenderer {
    constructor() {
        this.months = [{ name: 'January 2018', num: 1 }, { name: 'February 2018', num: 2 }, { name: 'March 2018', num: 3 },
        { name: 'April 2018', num: 4 }, { name: 'May 2018', num: 5 }, { name: 'June 2018', num: 6 }, { name: 'July 2018', num: 7 },
        { name: 'August 2018', num: 8 }, { name: 'September 2018', num: 9 }, { name: 'October 2018', num: 10 },
        { name: 'November 2018', num: 11 }, { name: 'December 2018', num: 12 }];
    }

    renderEvents(events) {
        // console.log(events);//works
        // $('.dim').empty(); // מה שבסוגריים  אמור להיות הדיב או הרשימה שבה יהיה האיבנטים - תגית כללית או קלאס כללי לכל רשימת איבנטים בתאים, ויהיו גם איידי לכל רשימת איבנטים לפי היום בחודש
        let monthNum;
        console.log($('.header').val());
        for (let m in this.months) {
            if ($('.header').val() == this.months[m].name) { //מה שבסוגריים זה קישור לתגית של הכותרת של החודש בו הלוח שנה נמצא April 2018 לדוגמא
                monthNum = this.months[m].num;
            }
        }
        console.log(monthNum);
        //doesnt even enter this for loop -
        for (let e in events) {
            if (events[e].month == monthNum) {
                console.log(events[e].month);
                for (let i = 1; i < 32; i++) {
                    let source = $('#event-template').html();
                    let template = Handlebars.compile(source);
                    let newHTML = template(events[e]);
                    $('#1').append(newHTML);
                    // $('#'+i).append(newHTML); //מה שבסוגריים זה האיידי של התא בטבלה ששווה ל(i)
                }
            }
        }
    }

    //works:

    renderMonth(i) {
        $('.header').empty()
        let source = $('#header-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(this.months[i]); // בהנדל ברס אני צריכה רק לכתוב {{name}}
        $('.header').append(newHTML);// מה שבסוגריים זה קישור לתגית של הכותרת של החודש בו הלוח שנה נמצא April 2018 לדוגמא
    }
}

export default EventsRenderer;