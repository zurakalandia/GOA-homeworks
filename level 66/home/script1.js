function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} by ${this.author} published in year ${this.year}`;
    }
}

let book1 = new Book('Harry Potter', 'J.K Rowling', 1997);

console.log(book1.getSummary());