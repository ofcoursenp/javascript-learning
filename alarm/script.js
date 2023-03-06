setInterval(() => {

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();

const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

if(localStorage.getItem('alarm')){
    if(timeString === localStorage.getItem('alarm')){
    console.log(true)
    setTimeout(() => {
        var audio = new Audio('videoplayback.mp3');
        audio.play();  
    },2000);
}

let time = new Date()
div = document.getElementById('time')
div.innerHTML = time.toLocaleTimeString()
}
else{}


},1000);


function alarmset(){
    alarm = document.getElementById("appt")
    time = alarm.value
    localStorage.setItem('alarm',time)
}