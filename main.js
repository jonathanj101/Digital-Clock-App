function showTime() {
    let date = new Date();

    let clock = document.querySelector("#clock");
    let seconds = document.querySelector("#clock-seconds");
    let time = document.querySelector("#day_night");

    let h = date.getHours() % 12 || 12;
    let m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    let dateTime = h + " : " + m;
    let day_Night = h < 12 ? "PM" : "AM";

    clock.textContent = dateTime;
    seconds.textContent = s;
    time.textContent = day_Night;
}
setInterval(() => {
    showTime();
}, 1000);
