for (let i = 0; i < data.length; i++) {
    // if(data_conteiner[i]){
    //     container.appendChild(data_conteiner[i]);
    // }

    for (const key in data[i]) {
        if (data[i] != data_tea && data[i] != data_coffee && data[i] != data_supplements && data[i] != data_drinks && data[i] != data_special_menu && data[i] != data_dessert) {
            container.insertBefore(hotDishContainer, container.firstChild);
            function_card_menu(data, i, key, 'dish-cont');
        }else if(data[i] == data_special_menu){
            container_special.insertBefore(specialContainer, container_special.firstChild);
            function_card_menu(data, i, key, 'special-list');
        }else if (data[i] == data_dessert){
            container_dessert.insertBefore(dessertContainer, container_dessert.firstChild);
            function_card_menu(data, i, key, 'dessert-cont');
        }else if(data[i] == data_drinks){
            container_drink.insertBefore(drinkContainer, container_drink.firstChild);
            function_card_menu(data, i, key, 'drink-cont');
        }else if(data[i] == data_tea){
            if (container_tea_coffee) {
                tea_cont(data, i, key);
            } else {
                console.error('container_tea_coffee is null');
            }
        
        } else if (data[i] == data_coffee){
            if (container_tea_coffee) {
                coffee_cont(data, i, key);
            } else {
                console.error('container_tea_coffee is null');
            }
        }
    }
}
displayCategories(container_supplements, supplementsContainer);