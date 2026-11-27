function pad(n) { return String(n).padStart(2, '0'); } // const dq = document.querySelector.bind(document); 
const dq = (selector) => document.querySelector(selector); 
const clock = dq('#clock'); 
const dateEl = dq('#date'); 
const days = [ 'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']; 
const months = [ 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']; 

function updateClock() { 
    const now = new Date(); 
    clock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`; 
    dateEl.textContent = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} года`; 
} 
setInterval(updateClock, 1000); 

const stopwatch = dq('#stopwatch'); 
const startBtn = dq('#swStart'); 
const stopBtn = dq('#swStop'); 
const resetBtn = dq('#swReset'); 
let swTime = 0; 
let swId = null; 

function showStopwatch(i = stopwatch) { 
    const minutes = Math.floor(swTime / 600); 
    const seconds = Math.floor((swTime % 600) / 10); 
    const tenth = swTime % 10; 
    i.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(tenth)}` 
} 

startBtn.addEventListener('click', () => { 
    if (swId !== null) return; 
    swId = setInterval(() => { swTime++; showStopwatch(); }, 100) 
}) 

stopBtn.addEventListener('click', () => { 
    clearInterval(swId); 
    swId = null; 
}) 

resetBtn.addEventListener('click', () => { 
    clearInterval(swId); 
    swId = null; 
    swTime = 0; 
    showStopwatch(); 
    lapsList.innerHTML = '';
}) 

const timerInput = dq('#timerInput'); 
const timerStart = dq('#timerStart'); 
const timerView = dq('#timerView'); 
const timerMsg = dq('#timerMsg'); 
const timerPaus = dq('#timerPaus'); 
let timerleft = 0; 
let timerId = null; 
let prover = false;

function showTimer() { 
    const minuts = Math.floor(timerleft / 60); 
    const seconts = timerleft % 60; 
    timerView.textContent = `${pad(minuts)}:${pad(seconts)}` 
} 

timerStart.addEventListener('click', () => { 
    clearInterval(timerId); 
    timerleft = Number(timerInput.value); 
    if (isNaN(timerleft) || timerleft <= 0) { 
        timerMsg.textContent = "веди цисло больше нуля"; 
        return; 
    } 
    prover = true; 
    timerMsg.textContent = ''; 
    startTimerInterval(); 
}) 

function startTimerInterval() { 
    clearInterval(timerId);
    timerId = setInterval(() => {
        timerleft--; 
        showTimer(); 
        if (timerleft === 0) { 
            clearInterval(timerId); 
            timerId = null; 
            prover = false;
            timerMsg.textContent = "время вышло"; 
            setTimeout(() => { timerMsg.textContent = ''; }, 3000); 
        } 
    }, 1000); 
} 

timerPaus.addEventListener('click', () => { 
    if (timerleft <= 0) return;

    if (prover) { 
        clearInterval(timerId); 
        timerId = null;
        prover = false; 
    } else { 
        startTimerInterval(); 
        prover = true; 
    } 
}) 

const greeting = dq('#greeting'); 
const hour = new Date().getHours(); 
let hello; 
if (hour < 6) { hello = 'Доброй ночи'; } 
else if (hour < 12) { hello = 'Доброе утро'; } 
else if (hour < 18) { hello = 'Добрый день'; } 
else { hello = 'Добрый вечер'; } 
greeting.textContent = `${hello}!`;



const lapsList = dq('#lapsList');
const swLap = dq('#swLap');

swLap.addEventListener('click', () => {
    lapsList.innerHTML += `<li>${stopwatch.textContent}</li>`;
})



const formatNum = num => String(num).length < 2 ? `0${num}` : num;

const birthdayFunc = () => {

    let day = document.getElementById('day');
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    let now = new Date();
    let newYear = new Date(2026, 10, 30);

    let difference = (newYear.getTime() - now.getTime()) / 1000;

    let days = difference > 0 ? Math.floor(difference / 60 / 60 / 24) : Math.ceil(difference / 60 / 60 / 24);
    let hours = Math.trunc((difference / 60 / 60) % 24);
    let minutes = Math.trunc((difference / 60) % 60);
    let seconds = Math.trunc((difference) % 60);

    day.textContent = formatNum(days);
    hour.textContent = formatNum(hours);
    minute.textContent = formatNum(minutes);
    second.textContent = formatNum(seconds);

    let bday = document.querySelector(".bday")
    bday.style.display = 'none';

    if (difference <= 0 && difference >= - 1 * 60 * 60 * 24) {
        bday.style.display = 'block';
        day.textContent = "00";
        hour.textContent = "00";
        minute.textContent = "00";
        second.textContent = "00";
    }
};

birthdayFunc();

let interval = setInterval(() => {
    birthdayFunc();
}, 1000)

