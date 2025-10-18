class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    borrow() {
        if(this.isAvailable) {
            this.isAvailable = false;
            return `you borrowed ${this.title}`;
        } else {
            return `sorry, ${this.title} is not available`;
        }
    }
}