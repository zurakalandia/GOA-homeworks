university = {
    name: 'oxford',
    departments: 15,
    website: 'https://example.com/your-stuff-here',
    ratings: {
        student1Rev: 'positive',
        student2Rev: 'very positive',
        student3Rev: 'positive',
    }

};

console.log(university);

console.log(Object.entries(university));

console.log(Object.hasOwn(university, 'scholarship'));

let newObject = {
    studentsCount: 5000
};

let combinedObject = Object.assign(university, newObject);

Object.freeze(combinedObject);

delete combinedObject.name; //fail

console.log(Object.isFrozen(combinedObject));



