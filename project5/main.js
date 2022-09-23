setInterval(function setTime(e) {

let hoursHand = document.querySelector('#hour-hand');
let minutesHand = document.querySelector('#minute-hand');
let secondsHand = document.querySelector('#second-hand');


let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

secondsHand.style.setProperty("--rotation",6*s);
minutesHand.style.setProperty("--rotation",6*m + s/10);
hoursHand.style.setProperty("--rotation",30*h + m/2 + s/120);


},1000);	

setTime();