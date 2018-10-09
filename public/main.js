import EventsRepository from './events-repository.js';
import EventsRenderer from './events-renderer.js';
import EventsHandler from './events-handler.js';

let eventsRepository = new EventsRepository();
let eventsRenderer = new EventsRenderer();
let eventsHandler = new EventsHandler(eventsRepository, eventsRenderer)

eventsHandler.onLoad();
eventsHandler.registerAddEvent();
eventsHandler.close();
eventsHandler.addEventDetails();



// var d = new Date();
// var m = d.getMonth(); 

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