
let btn = document.querySelector('.btn');
let text = document.querySelector('.text');
let loading = document.querySelector('.loading');

btn.addEventListener('click', () => {
    text.textContent = "";
    loading.style.display = "flex";
    btn.style.background = "#ececec";

    fetch('https://dummyjson.com')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            text.textContent = data.quote;
            loading.style.display = "none";
            btn.style.background = "#84fd4f";
        })
        .catch((error) => {
            console.error('Произошла ошибка при загрузке:', error);
            loading.style.display = "none";
            btn.style.background = "#84fd4f";
            text.textContent = "Не удалось загрузить данные.";
        });
});
