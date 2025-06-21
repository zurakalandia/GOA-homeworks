let library = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }, 
    { title: "1984", author: "George Orwell", year: 1949 }, 
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }, 
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 }];

function addBook(object) {
    library.push(object);

    return library;
};

function removeLastBook() {
    library.pop();

    return library;
};



function updateBookCopies(title, number) {
    let found = false;

    for(let i = 0; i < library.length; i++) {
        if(library[i].title == title) {
            library[i].copies = number;
            found = true;
            break
        }
    };

    if(found == false) {
            library.push({title: title, copies: number});
        }

    return library;
};

function listBooks() {
    let titles = [];

    for(let book of library) {
        titles.push(book.title);
    };

    return titles.join(', ');
};

function extractBooks(start, end) {
    let libraryPortion = library.slice(start, end);

    return libraryPortion;
};

function modifyBooks() {
    library.copyWithin(library.length - 1, 0, 1);

    return library;
};

function resetCopies(number) {
    for(let i = 0; i < library.length; i++) {
        library[i].copies = number
    };
    return library;
};


function removeFirstBook() {
    library.shift();

    return library;
};

function addFirstBook(book) {
    library.unshift(book);

    return book;
};