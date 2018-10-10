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

    deleteEvent(ID) {
        return $.ajax({
            method: 'DELETE',
            url: '/events/' + ID
        }).then(()=>{
            for(let i in this.events){
                if(this.events[i]._id == ID){
                    this.events.splice(i,1)
                }
            }
        })
        .fail((err)=>{
            if(err) {throw err}
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
            // console.log(data);
        })
    }
}

export default EventsRepository;