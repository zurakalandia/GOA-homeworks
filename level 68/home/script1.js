let sportsClub = {
    clubName: 'Orbi',
    sportType: 'Basketball',
    foundedYear: 2016,
    achievements: {
        achievement1: {
            name: 'name',
            age: 'age'
        },
        achievement2: {
            name: 'name',
            age: 'age'
        },
        achievement3: {
            name: 'name',
            age: 'age'
        }
    }
};

console.log(Object.keys(sportsClub));

console.log(Object.hasOwn(sportsClub, 'sponsors'));

let newObject = {
    stadiumCapacity: 15000
};

let combinedObject = Object.assign(sportsClub, newObject);

Object.freeze(combinedObject);

combinedObject.newKey = 'something'; //fail

console.log(Object.isFrozen(combinedObject));

