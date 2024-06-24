function click_cold_dish(){
    var divElement = document.getElementById('coldDishContainerId'); // замените 'yourDivId' на id вашего div
    var scrollPosition = divElement.offsetTop - 100;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
};
function click_hot_dish(){
    var divElement = document.getElementById('hotDishContainerId'); // замените 'yourDivId' на id вашего div
    var scrollPosition = divElement.offsetTop - 100;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
};
function click_dessert(){
    var divElement = document.getElementById('dessertContainerId'); // замените 'yourDivId' на id вашего div
    var scrollPosition = divElement.offsetTop - 100;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
};
function click_hot_drink(){
    var divElement = document.getElementById('drinkHotContainerId'); // замените 'yourDivId' на id вашего div
    var scrollPosition = divElement.offsetTop - 100;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
};
function click_cold_drink(){
    var divElement = document.getElementById('drinkContainerId'); // замените 'yourDivId' на id вашего div
    var scrollPosition = divElement.offsetTop - 100;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
};
function click_menu(){
    var divElement = document.getElementById('parserConteinerId'); // замените 'yourDivId' на id вашего div
    var scrollPosition = divElement.offsetTop - 100;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
};
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var element = document.getElementById('menuConteinerId'); // замените 'yourElementId' на id вашего элемента

    if (!element) {
        console.error('Элемент не найден на странице.');
        return;
    }

    if (scrollPosition >= 400) {
        element.style.opacity = '0.7';
        element.style.display = 'flex';
    } else if (scrollPosition < 600) {
        element.style.opacity = '0';
        element.style.display = 'none';
    }
});