
let btn = document.querySelector('.btn');

btn.addEventListener('mouseenter', function () {
    let x = Math.floor(Math.random() * 100 + 1); 
    let y = Math.floor(Math.random() * 100 + 1);
    btn.style.top = y + '%';
    btn.style.left = x + '%';
    console.log('Курсор мыши вошел в область кнопки');
});

btn.addEventListener('click', function () {
    alert('нельзя нажимать на кнопку ничем кроме мишки!');
});




