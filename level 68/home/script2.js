let hotel = {
    hotelName: 'Lady',
    stars: 4,
    location: 'bakuriani',
    guestReviews: {
        rev1: {
            review: 4
        },
        rev2: {
            review: 4
        },
        rev3: {
            review: 5
        }
    }
};


console.log(Object.entries(hotel));

console.log(Object.hasOwn(hotel, 'spa'));

let newObject = {
    roomsCount: 30
};

let combinedObject = Object.assign(hotel, newObject);

Object.freeze(combinedObject);

combinedObject.starts = 5; //fail

console.log(Object.isFrozen(combinedObject));

