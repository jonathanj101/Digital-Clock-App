function showTime() {
    let date = new Date();

    // DOM selecting nodes
    let clock = document.querySelector("#clock");
    let seconds = document.querySelector("#clock-seconds");
    let time = document.querySelector("#day_night");
    let dateP = document.querySelector("#date")

    // getting numerical day
    let dayNum = date.getDate()

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    // displays date as dd, mm (as name) numerical day
    let toDates = days[date.getDay()] + ' - ' + months[date.getMonth()] + " " + dayNum


    // hh mm ss

    let h = date.getHours() % 12 || 12;
    let m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();


    // displaying time as hh : mm
    let dateTime = h + " : " + m;

    // display pm if its less than 12th hour  else display am
    let day_Night = h < 12 ? "PM" : "AM";


    // DOM changing elements content
    clock.textContent = dateTime;

    seconds.textContent = s;

    time.textContent = day_Night;

    dateP.textContent = toDates.toUpperCase()

    setInterval(showTime, 100)
}

function militaryTime() {
    let date = new Date()

    let clock = document.querySelector("#clock");

    let militaryBtn = document.querySelector("#military_time")

    let h = date.getHours()
    let m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();


    militaryBtn.addEventListener('click', function () {
        clock.textContent = h + " : " + m + " : " + s
    })
}

setTimeout(() => {
    showTime()
    militaryTime()
}, 100);

