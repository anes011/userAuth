const productsContainer = document.querySelector('.products-container');

async function displayProducts() {
    try {
        const extract = await fetch('https://fakestoreapi.com/products');
        const products = await extract.json();
        
        Object.values(products).map((x) => {
            const newProduct = document.createElement('div');
            newProduct.classList.add('product');
            newProduct.innerHTML = `
            <div class="product-image-container">
            <img src="${x.image}" alt="">
            </div>
            <div class="product-desc-container">
                <p class="product-name" style="width: 250px;">${x.title}</p>
                <p class="product-price">${x.price}$</p>
                <button class="add-to-cart-btn">Add to cart</button>
            </div>
            `;
            productsContainer.append(newProduct);
        });
    }
    catch {
        
    }
};

displayProducts();