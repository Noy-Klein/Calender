class EventsRepository {
    constructor() {
        this.events = [];
    }

    getEvents(){
        return $.get('/events').then((events)=>{
            this.events = events;
        })
    }
}

export default EventsRepository;