// Set starting value of a new cart to be an empty list and the total items to be 0.
if (!localStorage.getItem('carts'))
    localStorage.setItem('carts', []);

if (!localStorage.getItem('total_items'))
    localStorage.setItem('total_items', 0);


// Add item to cart.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".grid-item").forEach(form => {
        form.onsubmit = () => {
            // Create a new cart item.
            var cart_item = {
                item: childNode.querySelector('.item').innerHTML, // in case this don't work try getting the children of "form".
                quantity: childNode.querySelector('.quan').innerHTML,
                price: childNode.querySelector('.price').innerHTML,
            };

            // append the cart item into carts
            let carts = localStorage.getItem('carts');
            carts.append(cart_item);

            localStorage.setItem('carts', carts);

            // increment total items.
            let total_items = localStorage.getItem('total_items');
            total_items++;

            localStorage.setItem('total_items', total_items);

            // Stop form from submitting.
            return false
        };
        return false
    });

    let cart = localStorage.getItem('carts');
    var j = 0;
    for (let i = 0; i > cart.length; i++) {
        j++;
    }

    document.querySelector("#number-of-items").innerHTML = j;

});