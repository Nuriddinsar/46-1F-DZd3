
const dq = document.querySelector.bind(document);
const btn = dq('#btn');
const nameInput = dq('#nameInput');
const numberInput = dq('#numberInput');
const nameError = dq('.name_error');
const numberError = dq('.number_error');
const title = dq('#title');
const result = dq('#result');

title.textContent = 'Игровая карточка игрока';

btn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const numberI = numberInput.value.trim();

    nameError.textContent = name === '' ? 'Введите название' : '';
    numberError.textContent = numberI === '' ? 'Введите число' : '';
    nameError.classList.toggle('error', name === '');
    numberError.classList.toggle('error', numberI === '');


    if (name === '' || numberI === '') return;
    const name0 = name.replace(/\s+/g, ' ');
    if (name0.toLowerCase().includes('test')) {
        nameError.textContent = 'Название не прошло проверку';
        nameInput.value = '';
        return; }

    const name1 = name0.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    const nameA = name0.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase()).join('');

    let number = Number(numberI);
    if (!Number.isFinite(number)) {
        numberError.textContent = 'Введите корректное число';
        numberInput.value = '';
        return; }

    let discount = 0;
    if (number >= 1000) {
        discount = 10;
    }else if (number < 1000 && number >= 500) {
        discount = 5;
    }
    
    let random = Math.floor(Math.random() * 90) + 10;

    result.innerHTML += `
    <div class="card ${discount === 10 ? 'legend' : discount === 5 ? 'pro' : 'newbie'}">
        <h3>Карточка игрока</h3>
        <h4>Имя: ${name1}</h4>
        <h5>Аббревиатура: ${nameA}</h5>
        <h5>Длина имени: ${name1.length-1}</h5>
        <h5>Очки: ${number.toFixed(2)}</h5>
        <h5>Промокод: ${random}</h5>
        <h5>Категория: Скидка ${discount}%</h5>
    </div>`;
});



