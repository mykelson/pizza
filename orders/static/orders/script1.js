var quantity = 0;

function decrement() {
    quantity--;

    if (quantity < 0) {
        quantity = 0
    }
    document.querySelector('#quan').innerHTML = quantity;
}

function increment() {
    quantity++;
    document.querySelector('#quan').innerHTML = quantity;
}

document.addEventListener('DOMContentLoaded', () => {

    // Set price.
    document.querySelectorAll('.set_price').forEach(button => {
        button.onclick = () => {
            price = "$" + button.dataset.price;
            document.querySelector('#price').innerHTML = price;
        };
    });


});