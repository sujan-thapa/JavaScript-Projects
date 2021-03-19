console.log('this is about making clock');

function updateClock(){

    // get the current date
    let currentTime = new Date();

    // abstract hour, minutes and seconds from date
    let currentHour = currentTime.getHours();

    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // padd 0 if mins and seconds is less than 10 
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes; 
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // convert railway clocc to am/pm clocc 
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;


    // choose am and pm 
    let timeOfDay = (currentHour < 12) ? "AM" : "PM";
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" +currentSeconds + " " +timeOfDay;

    document.getElementById("clock").innerHTML = currentTimeStr;

}