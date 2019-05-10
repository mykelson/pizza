document.addEventListener('DOMContentLoaded', () => {
    load("regulars");
});

function load(menu_type) {
    const request = new XMLHttpRequest();
    request.open('GET', `/menu/${menu_type}`);
    request.onload = () => {
        const data = JSON.parse(request.responseText)
        const header = document.createElement('h2')
        header.innerHTML = menu_type;
        document.querySelector('#list_item').append(header);
        data.forEach(fill_menu(menu_type));
    };
    request.send();
};

function fill_menu(contents, menu_type) {
    // Create new form.
    const form = document.createElement('form');
    form.className = 'menu_item';

    const form_div = document.createElement('div');
    form_div.className = 'card';

    const heading = document.createElement('h3');
    heading.className = "card-header";
    heading.innerHTML = contents.menu_type.item;
    form_div.append(heading);

    const card_body = document.createElement('div');
    card_body.className = "card-body";

    // Create price div
    const price_div = document.createElement('h5');
    price_div.className = 'card-title';
    price_div.innerHTML = "Price: ";

    const price_tag = document.createElement('span');
    price_tag.className = 'badge badge-light';
    price_tag.id = 'price';
    price_tag.innerHTML = "$";

    price_div.append(price_tag);
    card_body.append(price_div);

    // Create size selection buttons.
    const small = document.createElement('button');
    small.className = 'btn size';
    small.innerHTML = 'Small';
    small.dataset.price = contents.menu_type.small_price;
    const large = document.createElement('button');
    large.className = 'btn size';
    large.innerHTML = 'Large';
    large.dataset.price = contents.menu_type.large_price;

    card_body.append(small, large);

    const quantity = document.createElement('div');
    quantity.className = 'quantity';
    quantity.innerHTML = "Quantity: "

    const quan_select = document.createElement('input');
    quan_select.className = 'badge badge-light quan';
    quan_select.id = "quan";
    quan_select.type = 'number';

    quantity.append(quan_select);
    card_body.append(quantity);

    const submit = document.createElement('input');
    submit.className = 'btn btn-primary submit';
    submit.type = 'submit';
    submit.innerHTML = "Add to cart";

    card_body.append(submit);

    form_div.append(card_body);
    form.append(form_div);
    document.querySelector('#list_item').append(form);
};