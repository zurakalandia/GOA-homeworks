let cinema = {
    cinemaName: 'cavea',
    moviesCount: 20,
    location: 'gallery',
    guestReviews: {
        rev1: {
            review: 'nice'
        },
        rev2: {
            review: 'nice'
        },
        rev3: {
            review: 'great'
        }
    }
};


console.log(Object.entries(cinema));

console.log(Object.hasOwn(hotel, 'vipSeats'));

let newObject = {
    ticketPrice: 15
};

let combinedObject = Object.assign(cinema, newObject);

Object.freeze(combinedObject);

delete combinedObject.location; //fail

console.log(Object.isFrozen(combinedObject));