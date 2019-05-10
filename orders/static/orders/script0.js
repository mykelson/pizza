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


// Template for menu items.


document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.menu_item').forEach(button => {
        button.onclick = () => {
            injection = "#" + button.dataset.item
            const template = Handlebars.compile(document.querySelector(injection).innerHTML);
            document.querySelector('#menu_item').innerHTML = template;
        };
    });


    // Set price.
    document.querySelectorAll('.set_price').forEach(button => {
        button.onclick = () => {
            price = "$" + button.dataset.price;
            document.querySelector('#price').innerHTML = price;
        };
    });


});