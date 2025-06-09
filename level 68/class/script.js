let academy = {
    name: 'GOA',
    courses: 'web development',
    socialLink: 'https://example.com/your-stuff-here',
    reviews: {
        user1: {
            name: 'nika',
            status: 'child',
            review: 'positive'
        },
        user2: {
            name: 'luka',
            status: 'child',
            review: 'positive'
        },
        user3: {
            name: 'davit',
            status: 'child',
            review: 'positive'
        }
        
    }
}

let newObject = {
    member: 'something'
}

console.log(Object.entries(academy));

console.log(Object.keys(academy));

console.log(Object.values(academy));

console.log(Object.hasOwn(academy, 'courses'));

let combinedObject = Object.assign(academy, member);

console.log(combinedObject);

Object.freeze(combinedObject);

console.log(Object.isFrozen(combinedObject));







