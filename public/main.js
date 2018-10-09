
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
/*
import EventsRepository from './events-repository'
import EventsRenderer from './events-renderer'
import EventsHandler from './events-handler'

let eventsRepository = new EventsRepository();
let eventsRenderer = new EventsRenderer();
let eventsHandler = new EventsHandler(eventsRepository, eventsRenderer)

var d = new Date();
var m = d.getMonth(); 
*/
/*
$(document).on('click', '#next', function(){

    var str = m + 1;
    var str1 = y;


    if (str=="" )
      {
        document.getElementById("calendar_preview").innerHTML="";
          return;
      } 
      if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
      }
      else
      {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }

      xmlhttp.onreadystatechange=function()
      {

        if(document.getElementById("calendar_preview") != null) {


          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
              document.getElementById("calendar_preview").innerHTML=xmlhttp.responseText;
            }
        }
      }

    var url = calendar_vars.plugin_url + "?month=" + str +"&"+"year="+str1;

    xmlhttp.open("GET",url,true);
    xmlhttp.send(); 
});

*/