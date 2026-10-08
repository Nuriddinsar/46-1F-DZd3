
let h2 = document.querySelector('h2');
let p = document.querySelector('p');
let btn = document.querySelector('#actionBtn');
let bol = document.querySelector('.bol');
let not = document.querySelector('.not');
let online = true;

h2.textContent = 'Alex';

btn.addEventListener('click', () => {
    if (online) {
        p.textContent = 'Онлайн';
        p.style.color = 'var(--green)';
        bol.style.backgroundColor = 'var(--green)';
        not.textContent = 'не';
    } else {
        p.textContent = 'Оффлайн';
        p.style.color = 'var(--grey)';
        bol.style.backgroundColor = 'var(--grey)';
        not.textContent = '';
    }
    online = !online;
});




