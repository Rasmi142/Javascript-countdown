
  const load = document.addEventListener("DOMContentLoaded",()=>{


  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const min = document.getElementById("minutes")
  const sec = document.getElementById("seconds");

function updateTime() {
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00:00`);
    const currentDate = new Date();
    const diff = newYear - currentDate;
    const day = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hour = Math.floor((diff / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    days.innerHTML=day < 10 ? "0"+ day : day;
    hours.innerHTML=hour < 10 ? "0"+ hour : hour;
    min.innerHTML=minutes < 10 ? "0"+ minutes : minutes;
    sec.innerHTML=seconds < 10 ? "0"+ seconds : seconds;
}
setInterval(updateTime,1000);

})






//  1000ms = 1s;
//  60s = 1m;
//  60m = 1h;
//  24hr = 1d