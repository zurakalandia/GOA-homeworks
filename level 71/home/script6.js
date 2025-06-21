let cartItems = ['bread', 'water', 'coke'];

let prices = [1.99, 0.89, 1,79];

function addItem(item, price) {
    cartItems.unshift(item);
    prices.unshift(price);

    return [cartItems, prices];
};

function removeFirstItem() {
    cartItems.unshift();
    prices.unshift();

    return [cartItems, prices];
};

function replaceItem(index, item, price) {
    cartItems.splice(index, 1, item);
    prices.splice(index, 1, price);

    return [cartItems, prices];
};

function createReceipt() {
    let receipt = cartItems.join(', ');

    return receipt;
};

function applyDiscount(discount) {
    prices.fill(discount, 0);

    return prices;
};

