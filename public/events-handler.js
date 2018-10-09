class EventsHandler {
    constructor(eventsRepository, eventsRenderer) {
        this.eventsRepository = eventsRepository;
        this.eventsRenderer = eventsRenderer;
        //inputs here
    }

    showForm(){
        var modal = $('#mymodel');
        var btn = $('#myBtn');
        btn.on('click', function(){
            
        })
    }

    nextMonth(){
        
    }

    lastMonth(){
        
    }
    addEventDetails(){
        
        $('#todaysEvents').on("click", function () {
            let title = $(".title-input").val()
            let name = $(".name-input").val()
            let time = $(".time-input").val()
            let date = $(".date-input").val()
            let image = $(".image-input").val()

            postUnicornInfo(title,day,image,time,name)
        })

    }
// Get the modal
var modal = document.getElementById('myModal');
    
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    showDayEvents(){

    }
    showSpecialEvents(){

    }
}

export default EventsHandler;

