function tea_cont(data, i, key){
    container_tea_coffee.insertBefore(data_conteiner_tea_coffee[0], container_tea_coffee.firstChild);
    container_tea_coffee.insertBefore(drinkHotContainer, container_tea_coffee.firstChild);
    const teaList = document.getElementById('tea-list');
    const teaItem = document.createElement('li');
    const tea_list = data[i][key];
    teaItem.innerHTML =`
        <div class="tea-conteiner">
            <div class="name">
                <h1>${tea_list.name}</h1>
            </div>
            <div class="sum_and_gram">
                <div class="ml"><p>${tea_list.ml}мл</p></div>
                <p>/</p>
                <div class="sum"><p>${tea_list.money}</p></div>
            </div>
        </div>
    `;
    teaList.appendChild(teaItem);
};
function coffee_cont(data, i, key){
    var element = document.getElementById('tea-list');
        element.parentNode.insertBefore(data_conteiner_tea_coffee[1], element.nextSibling);
        const coffeeList = document.getElementById('coffee-list');
        const coffeeItem = document.createElement('li');
        const coffee_list = data[i][key];
        coffeeItem.innerHTML =`
            <div class="coffee-conteiner">
                <div class="name">
                    <h1>${coffee_list.name}</h1>
                </div>
                <div class="sum_and_gram">
                    <div class="ml"><p>${coffee_list.ml}мл</p></div>
                    <p>/</p>
                    <div class="sum"><p>${coffee_list.money}</p></div>
                </div>
            </div>
        `;
        coffeeList.appendChild(coffeeItem);
};