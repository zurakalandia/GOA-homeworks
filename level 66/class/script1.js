function calculate(id, price, discount) {
    this.id = id;
    this.price = price;
    this.discount = discount;

    this.finalPrice = function() {
        return this.price - (this.price * this.discount / 100);
    }
}

let item = new calculate(94314, 500, 10);

console.log(`final price: ${item.finalPrice()}`);