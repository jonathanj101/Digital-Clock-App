let date = new Date();

let h = date.getHours() % 12 || 12;
let m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

let dateFullTime = h + " : " + m + " : " + s;

document.querySelector("#clock").innerHTML = dateFullTime;
