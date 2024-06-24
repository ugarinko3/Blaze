function displayCategories(container_supplements, supplementsContainer) {
    container_supplements.insertBefore(supplementsContainer, container_supplements.firstChild);
    const supplementsList = document.getElementById('supp-cont');
    const categories = Object.entries(data_supplements);

    categories.forEach(category => {
        const supplementsItem = document.createElement('div');
        const categoryName = category[0];
        const products = category[1];

        let productsHTML = '';
        for (const productName in products) {
            const productPrice = products[productName];
            productsHTML += `
                <div class="name-supplements">
                    <h3>${productName}</h3>
                    <p>${productPrice}</p>
                </div>
                <hr>
            `;
        }

        supplementsItem.innerHTML = `
            <div class="supplements-container-width">
                <div class="name">
                    <h2>${categoryName}</h2>
                    <hr>
                </div>
                <div class="supplements" id="supp">
                    ${productsHTML}
                </div>
            </div>
        `;
        supplementsList.appendChild(supplementsItem);
    });
    return supplementsContainer
}