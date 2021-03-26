 //get current time to display on page 
 let now = moment().format("MMMM Do, YYYY hh:mm:ss");
 console.log(now);
let currentDay = document.getElementById('currentDay');
currentDay.innerHTML = now;