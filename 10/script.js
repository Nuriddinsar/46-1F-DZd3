
let carts = document.querySelector('.cards');
let sum = 0;
let quantity = 0;
let drinksContainer = document.querySelector('.drinks');
let summaryPrice = document.querySelector('.summary-price');
let summaryQuantity = document.querySelector('.summary-quantity');

const menu = [
  { name: 'Борщ', price: 90, type: 'суп', image: 'https://cookhelp.ru/static/recipes/borsch_x700y500.webp', },
  { name: 'Пюре с котлетой', price: 150, type: 'горячее', image: 'https://avatars.mds.yandex.net/get-vertis-journal/4471904/6bfbef47-0c46-4dd2-ad60-c1523387998a.jpeg/1600x1600', },
  { name: 'Салат', price: 70, type: 'закуска', image: 'https://avatars.mds.yandex.net/get-vertis-journal/4220003/c2273b6c-5d03-4d72-bdc6-18a289081b86.jpeg/1600x1600', },
  { name: 'Компот', price: 40, type: 'напиток', image: 'https://vodovoz.ru/upload/iblock/3fa/a9gpijbg0d22aa1tnbxjik1mlx8w6074.jpg', },
  { name: 'Пицца', price: 200, type: 'горячее', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgipuNJmDUED8BwifIOxwXZd6y6FW8NRuAPz21b0tFVM1zE5Aj7x_6qXL&s=10', }
];
const proverka = menu.sort((a, b) => a.price - b.price);
const drinks = menu.filter(item => item.type === 'напиток');
const layout = (item, isMenu = false) => `
  <div class="card">
    <img class="card-img" src="${item.image}" alt="${item.name}">
    <h3 class="card-title">${item.name}</h3>
    <p class="card-price ${isMenu ? `${item.price > 100 ? 'expensive' : ''}${item.price < 60 ? 'cheap' : ''}` : ''}">Цена: ${item.price} руб.</p>
    <p class="card-type">Тип: ${isMenu ? `<i class="type-icon">${item.type}</i>` : item.type}</p>
  </div>`;

carts.innerHTML = menu.map(item => {
  sum += item.price;
  quantity++;
  return layout(item, true);
}).join("");


function removeDrinkCards() {
  const typeIcons = document.querySelectorAll('.type-icon');

  typeIcons.forEach(icon => {
    if (icon.textContent === "напиток") {
      const card = icon.closest(".card");
      card.remove();
    }
  });
}
removeDrinkCards();

drinksContainer.innerHTML = drinks.map(item => layout(item)).join("");

summaryPrice.textContent = sum;
summaryQuantity.textContent = quantity;



// const visibleMenu = menu.filter(item => item.type !== 'напиток');

// carts.innerHTML = visibleMenu.map(item => {
//   sum += item.price;
//   quantity++;
//   return `
//   <div class="card">
//     <img class="card-img" src="${item.image}" alt="${item.name}">
//     <h3 class="card-title">${item.name}</h3>
//     <p class="card-price ${item.price > 100 ? 'expensive' : ''}${item.price < 60 ? 'cheap' : ''}">Цена: ${item.price} руб.</p>
//     <p class="card-type">Тип: ${item.type}</p>
//   </div>
// `;
// }).join("");
