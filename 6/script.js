
let btn = document.querySelector('#fox-btn')
let img = document.querySelector('#fox-img')

btn.addEventListener('click', () => {
    fetch('https://randomfox.ca/floof')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.image);

            img.src = data.image;
            img.style.display = 'block';
        })
        .catch((error) => {
            console.error('Произошла ошибка при загрузке:', error);
        });
})