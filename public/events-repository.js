class EventsRepository {
    constructor() {
        this.events = [];
    }

    getEvent() {
        return $.get('/events').then((data)=> {
            this.events = data;
        })
    }

    addEvent(title, day, month, year, time, location, image) {
        let event = {
            title: title,
            day: day,
            month: month,
            year: year,
            time: time,
            location: location,
            image: image
        }
        return $.post('/events', event).then((data)=> {
            this.events.push(data)
        })
    }
}

export default EventsRepository;