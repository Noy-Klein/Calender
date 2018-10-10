class EventsRepository {
    constructor() {
        this.events = [];
    }

    getMonth(){
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