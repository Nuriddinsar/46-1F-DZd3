
const formatNum = num => String(num).length < 2 ? `0${num}` : num;


const birthdayFunc = () => {

    let day = document.getElementById('day');
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    let now = new Date();
    let bekzat = new Date(2026, 9, 18);

    let difference = (bekzat.getTime() - now.getTime()) / 1000;

    let days = Math.floor(difference / 60 / 60 / 24);
    let hours = Math.floor((difference / 60 / 60) % 24);
    let minutes = Math.floor((difference / 60) % 60);
    let seconds = Math.floor((difference) % 60);

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