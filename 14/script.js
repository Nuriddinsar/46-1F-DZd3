



function cl(params) {
    console.log(params);
}
const dq = document.querySelector.bind(document);
const dateInput = dq('.date');
const btn = dq('.btn');
const ch2 = dq('.ch2');

btn.addEventListener('click', () => {
    if (dateInput.value == "") {
        dateInput.style.border = "1px solid red";
        dateInput.style.color = "red";
        ch2.style.display = "none";
        return;
    }
    dateInput.style.border = "none";
    dateInput.style.color = "#151515";



    ch2.style.display = "block";
    const formatNum = num => String(num).padStart(2, "0");

    const birthdayFunc = () => {

        let day = document.getElementById('day');
        let hour = document.getElementById('hour');
        let minute = document.getElementById('minute');
        let second = document.getElementById('second');

        let now = new Date();
        let bekzat = new Date(dateInput.value);

        let difference = (bekzat.getTime() - now.getTime()) / 1000;

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
})
