const productsContainer = document.querySelector('.products-container');
const cartBtn = document.querySelector('.cart-btn');
const body = document.querySelector('body');

let cart = [];

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
                <button class="add-to-cart-btn" onclick="addToCart(${x.id})">Add to cart</button>
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



function addToCart(id) {
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((response) => {
            const addedToCart = Object.values(response).find((b) => b.id === id);
            cart.push(addedToCart);
            const cartCount = document.querySelector('.cart-count');
            cartCount.textContent = `${cart.length}`;
        })
}


cartBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        const emptyCart = document.querySelector('.empty-cart');
        emptyCart.style.display = 'flex';
        setTimeout(() => {
            emptyCart.style.transform = 'translateY(40px)';
        }, 1);
        setTimeout(() => {
            emptyCart.style.transform = 'translate(0)';
            emptyCart.style.display = 'none';
        }, 2000);
    }else {
        cart.map((s) => {
            const productDetails2 = document.createElement('div');
            productDetails2.classList.add('product-details-2');
            productDetails2.innerHTML = `
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
            </button>
            <div class="cart-img-container">
                <img src="${s.image}" alt="">
            </div>
            <p class="cart-title">${s.title}</p>
            <p class="cart-price">${s.price}</p>
            <p class="quantity">1</p>
            <p class="subtotal">${s.price}</p>
            `;
            setTimeout(() => {
                const cartLeft = document.querySelector('.cart-left');
                cartLeft.append(productDetails2);
            }, 1);
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
                </div>
            </div>
        </nav>
    
        <div class="product-cart-container">
            <div class="cart-left">
                <h1>Shopping cart</h1>
                <div class="product-details">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
            </div>
            <div class="cart-right">
                <h1>Cart totals</h1>
                <div class="right-subtotal">
                    <p>Subtotal</p>
                    <p>315$</p>
                </div>
                <div class="shipping-container">
                    <p>Shipping</p>
                    <div class="shipping-prices">
                        <div class="free-shipping">
                            <p>Free shipping</p>
                            <button class="radio-btn"><div class="dot"></div></button>
                        </div>
                        <div class="flat-rate">
                            <p>Flat rate: 10$</p>
                            <button class="radio-btn"><div class="dot"></div></button>
                        </div>
                        <div class="pickup">
                            <p>Pickup: 15$</p>
                            <button class="radio-btn"><div class="dot"></div></button>
                        </div>
                    </div>
                </div>
                <div class="total-container">
                    <p>Total</p>
                    <p>315$</p>
                </div>
                <button class="checkout-btn">Proceed to checkout</button>
            </div>
        </div>
            `;
        });
    }
});