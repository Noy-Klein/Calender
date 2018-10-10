class EventsRepository {
    constructor() {
        this.events = [];
        this.holidays = [];
    }

    getHolidays() {
        $.ajax({
            method: 'GET',
            url: 'https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=off&mod=on&nx=off&year=now&month=x&ss=off&mf=off&c=off&geo=none&geonameid=3448439&m=50&s=off',
            success: function(data) {
                this.holidays = data.items;
                // console.log(this.holidays);
            }
        })
    }

    getMonth() {
        let now = new Date();
        let m = now.getMonth();
        m = m++;
        return m;
    }

    getEvents() {
        return $.get('/events').then((data)=> {
            this.events = data;
        })
    }
    // year,
    addEvent(title, day, month, time, location, image) {
        let event = {
            title: title,
            day: day,
            month: month,
            year: "2018",
            time: time,
            location: location,
            image: image
        }
        return $.post('/events', event).then((data)=> {
            this.events.push(data);
            console.log(data);
        })
    }
}

export default EventsRepository;