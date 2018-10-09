class EventsHandler {
    constructor(eventsRepository, eventsRenderer) {
        this.eventsRepository = eventsRepository;
        this.eventsRenderer = eventsRenderer;
        //inputs here
    }

    nextMonth() {
        $("").on('click', function() {


        })
    }
    previousMonth() {
        $("").on('click', function() {

        })
    }

    addEvent() {
        const model = $("#mymodel");
        const button = $("#mybtn");
        const span = $("")
    }

    addEventDetails() {
        $('').on("click", function () {
            let title = $("").val();
            let day = $("").val();
            let month = $("").val();
            let year = $("").val();
            let time = $("").val();
            let location = $("").val();
            let image = $("").val();
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
    showDayEvents() {
        $("").on('click', function() {

        })
    }

    showSpecialEvents() {
        $("").on('click', function(){

        })
    }


export default EventsHandler;

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2018-06-01';
