class EventsHandler {
    constructor(eventsRepository, eventsRenderer) {
        this.eventsRepository = eventsRepository;
        this.eventsRenderer = eventsRenderer;
    }

    nextMonth() {
        $("").on('click', function() {


        })
    }
    previousMonth() {
        $("").on('click', function() {

        })
    }

    registerAddEvent() {
        const model = $("#mymodel");
        const button = $("#mybtn");
        button.on('click', function(){
            model.css('display', 'none');
        })
    }

    close(){
        const model = $("#mymodel");
        const span = $('.close')[0];
        span.on('click', function(){
            model.css('dispaly', 'none');
        })
    }

    addEventDetails() {
        $('.submit').on("click", function () {
            let title = $(".title").val();
            let day = $(".day").val();
            let month = $(".month").val();
            let year = $(".Year").val();
            let time = $("time").val();
            let location = $("location").val();
            let image = $(".image").val();
            if(title === "") {alert("Please enter title")}
            if(day === "") {alert("Please enter day")}
            if(month === "") {alert("Please enter month")}
            if(year === "") {alert("Please enter year")}
            this.eventsRepository.addEvent(title, day, month, year, time, location, image).then(()=> {
                this.eventsRepository.renderEvents(this.eventsRepository.events)
            })
        })

    }
    // Get the model
    // var model = document.getElementById('mymodel');

    // Get the button that opens the model
    // var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the model
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the model 
    // btn.onclick = function() {
    //     model.style.display = "block";
    // }



    // When the user clicks on <span> (x), close the model
    // span.onclick = function() {
    //     model.style.display = "none";
    // }



    // // When the user clicks anywhere outside of the model, close it
    // window.onclick = function(event) {
    //     if (event.target == model) {
    //         model.style.display = "none";
    //     }
    // }
    // showDayEvents() {
    //     $("").on('click', function() {

    //     })
    // }

    // showSpecialEvents() {
    //     $("").on('click', function(){

}
export default EventsHandler;

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2018-06-01';

var calendar = new Y.Calendar({
    contentBox: "#mycalendar",
    width:'100%',
    showPrevMonth: true,
    showNextMonth: true,
    date: new Date()}).render();


      $("#1 tr1").click(function(){
        window.location = "example.html";
      });