function function_card_menu(data, i, key, name_id){
    // container_special.insertBefore(specialContainer, container_special.firstChild);
    const specialList = document.getElementById(name_id);
    const specialItem = document.createElement('div');
    const specialNameObject = document.createElement('div');
    specialNameObject.classList.add('name_special');
    const specialData = data[i][key];

    specialNameObject.innerHTML = `
                    <h2>${key}</h2>
                    <hr>
    `;
    specialList.appendChild(specialNameObject);

    for (const specialName in data[i][key]){
        const specialObject = specialData[specialName];
        specialItem.innerHTML+=`
        <div class="dish-1">
            <div class="description">
                <div class="photo">
                    <img src="${specialObject.photo}" alt="">
                </div>
                <div class="text">
                    <div class="name">
                        <h1>${specialObject.name_dish}</h1>
                    </div>
                    <div class="description_dish">
                        <h2>${specialObject.description_dish}</h2>
                    </div>
                    <div class="sum_and_gram">
                        <div class="gram">
                            <p>${specialObject.gramm_dish}</p>
                        </div>
                        <div class="table">
                            <p>/</p>
                        </div>
                        <div class="sum">
                            <p>${specialObject.sum_dish}</p>
                        </div>
                    </div>
                    <div class="like">
                        <div class="photo" onclick="changeColor(event, '${key}','${i}')">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 391.837 391.837" style="enable-background:new 0 0 391.837 391.837;" xml:space="preserve">
                                <g>
                                    <path id="svgPath" d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58 c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0 c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"></path>
                                </g>
                            </svg>
                        </div>
                        <div class="menu">
                            <p id="counter">${specialObject.like}</p>
                        </div>
                    </div>
                    <div class="line">
                        <div class="line_right"></div>
                        <div class="line_left"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
        specialList.appendChild(specialItem);
    }
};
