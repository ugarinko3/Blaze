const container = document.querySelector('.dish-drink-container');
const container_special = document.querySelector('.menu_special_offer');
const container_drink = document.querySelector('.drink-cold-container-menu')
const container_supplements = document.querySelector('.supplements-container');
const container_tea_coffee = document.querySelector('.tea-coffee-container');
const container_dessert = document.querySelector('.dish-dessert');


const specialContainer = document.createElement('div');
const drinkHotContainer = document.createElement('div');
const hotDishContainer = document.createElement('div');
const dessertContainer = document.createElement('div');
const coldDishContainer = document.createElement('div');
const drinkContainer = document.createElement('div');
const sauseContainer = document.createElement('div');
const coffeeContainer = document.createElement('div');
const teaContainer = document.createElement('div');
const supplementsContainer = document.createElement('div');

specialContainer.classList.add('name-special-offer');
specialContainer.setAttribute('id', 'nameSpecialId');

teaContainer.classList.add('tea-name-container');
coffeeContainer.classList.add('coffee-name-container');
supplementsContainer.classList.add('supplements-name-container');

drinkHotContainer.classList.add('drink-hot-container');
drinkHotContainer.setAttribute('id', 'drinkHotContainerId');

dessertContainer.classList.add('desset-conteiner');
dessertContainer.setAttribute('id', 'dessertContainerId');

coldDishContainer.classList.add('cold-dish-container');
coldDishContainer.setAttribute('id', 'coldDishContainerId');

drinkContainer.classList.add('drink-container');
drinkContainer.setAttribute('id', 'drinkContainerId');

hotDishContainer.classList.add('hot-dish-container');
hotDishContainer.setAttribute('id', 'hotDishContainerId');

sauseContainer.classList.add('sause-container');
sauseContainer.setAttribute('id', 'sauseContainerId');

specialContainer.innerHTML = `<h1>Сезонное предложение<hr></h1>`;
hotDishContainer.innerHTML = `<h1>Основное меню<hr></h1>`;
coldDishContainer.innerHTML = `<h1>Холодные блюда<hr></h1>`;
dessertContainer.innerHTML = `<h1>Десерты<hr></h1>`;
sauseContainer.innerHTML = `<h1>Соуса<hr></h1>`;
drinkContainer.innerHTML = `<h1>Напитки<hr></h1>`;
drinkHotContainer.innerHTML = `<h1>Горячие напитки<hr></h1>`;
supplementsContainer.innerHTML=`<h1>Добавки<hr></h1>`;
coffeeContainer.innerHTML = `<h2>Кофе</h2><hr>`;
teaContainer.innerHTML = `<h2>Чай</h2><hr>`;

const data_conteiner = [specialContainer, hotDishContainer, dessertContainer];
const data_conteiner_tea_coffee = [teaContainer, coffeeContainer];


{/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
    <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"/>
</svg>   */}