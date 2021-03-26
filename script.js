//get current time to display on page 
function printTime(){
    let currentDay = document.getElementById('currentDay');
    let now = moment().format("MMMM Do, YYYY hh:mm:ss");
    currentDay.textContent = now;
    }   
   setInterval(printTime, 1000);