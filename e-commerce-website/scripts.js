let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});

function addToCart(event) {
    const productElement = event.target.closest('.product');
    const productId = productElement.dataset.id;
    const productName = productElement.querySelector('h2').innerText;
    const productPrice = productElement.querySelector('p').innerText;

    const product = {
        id: productId,
        name: productName,
        price: productPrice
    };

    cart.push(product);
    console.log(cart);
    alert(`${productName} has been added to the cart.`);
}