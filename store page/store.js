const productsContainer = document.querySelector('.products-container');
const body = document.querySelector('body');

fetch('https://fakestoreapi.com/products')

    .then((response) => response.json())
    .then((response) => {
        Object.values(response).map((x) => {
            const newProduct = document.createElement('div');
            newProduct.classList.add('product');
            newProduct.innerHTML = `
            <div class="product-image-container" onclick="productDetails(${x.id})">
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
    })




const productDetails = (id) => {
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((response) => {
            const target = Object.values(response).find((v) => v.id === id);
            body.innerHTML = `
            <nav>
            <div class="left-section">
                <input type="text" placeholder="What can we help you find?">
                <svg class="search-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>
    
            <div class="middle-section">
                <h1>Crate&Barrel</h1>
            </div>
    
            <div class="right-section">
                <div class="profile-container">
                    <p>Orders & Sign In</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                </div>
    
                <div class="favourites-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    <p>0</p>
                </div>
    
                <div class="cart-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <p>2</p>
                </div>
            </div>
        </nav>
    
        <div class="genre-nav">
            <p>Sofas & Chairs</p>
            <p>Living Room</p>
            <p>Dining Room</p>
            <p>Bedroom</p>
            <p>Lighting</p>
            <p>Garden</p>
        </div>
    
        <div class="product-details-container">
            <div class="details-image-container">
                <img src="${target.image}" alt="">
            </div>
            <div class="details-container">
                <div class="title-price-container">
                    <p>${target.title}</p>
                    <p>${target.price}$</p>
                </div>
    
                <hr>
    
                <div class="product-description">
                    <p>Product description:</p>
                    <p>${target.description}</p>
                </div>
    
                <div class="favourite-readmore-container">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </button>
                    <p class="read-more">Read More</p>
                </div>
    
                <button class="add-to-bag">ADD TO BAG</button>
            </div>
        </div>
            `;
        })
};

productDetails();
