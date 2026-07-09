const targetDate = new Date("2026-08-05T07:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = targetDate-now;

document.getElementById("days").innerHTML=Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML=Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML=Math.floor((distance%(1000*60))/1000);

},1000);
