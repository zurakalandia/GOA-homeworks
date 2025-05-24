book = {
    title: 'Harry Potter',
    author: 'J.K Rowling',
    release: '1997',
    genre: 'Fantasy',
    price: '50$'
}

console.log(book);

console.log(book.title);
console.log(book.author);
console.log(book.release);
console.log(book.genre);
console.log(book.price);

console.log(book['title']);
console.log(book['author']);
console.log(book['release']);
console.log(book['genre']);
console.log(book['price']);

console.log(`${book.title} by ${book.author} was released in ${book.release}. It's a ${book.genre} book that costs ${book.price}`);


