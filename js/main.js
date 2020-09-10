let isMilitaryTime = false
let intervalID;
document.addEventListener("DOMContentLoaded", function () {
    displayTime()
    setInterval(displayTime, 1000)
})
let militaryBtn = document.querySelector("#military_time")
militaryBtn.addEventListener('click', function () {
    isMilitaryTime = !isMilitaryTime
    clearInterval(intervalID)
    displayTime()
    intervalID = setInterval(displayTime, 1000)
})
function displayTime() {
    const date = new Date();
    const h = date.getHours();
    const m = formatTime(date.getMinutes());
    const s = formatTime(date.getSeconds());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const toDates = days[date.getDay()] + ' - ' + months[date.getMonth()] + " " + date.getDate()
    const clock = document.querySelector("#clock");
    const seconds = document.querySelector("#clock-seconds");
    const time = document.querySelector("#day_night");
    const dateP = document.querySelector("#date")
    const militaryBtn = document.querySelector("#military_time")
    dateP.textContent = toDates.toUpperCase()
    if (!isMilitaryTime) {
        militaryBtn.textContent = "military time".toUpperCase()
        const dateTime = displayStandardTime(h) + " : " + m;
        const day_Night = amOrPm(h);
        time.textContent = day_Night;
        time.style.display = 'block'
        clock.textContent = dateTime;
        seconds.textContent = s;
        seconds.style.display = 'block'
    } else {
        militaryBtn.textContent = "standard time".toUpperCase()
        seconds.style.display = 'none'
        clock.textContent = h + " : " + m + " : " + s
        time.style.display = 'none'
    }
}
function formatTime(time) {
    return time < 10 ? "0" + time : time
}
function displayStandardTime(h) {
    return parseInt(h) < 12 ? parseInt(h) + 12 : parseInt(h)

}
function amOrPm(h) {
    return parseInt(h) < 12 ? "PM" : "AM"
}  