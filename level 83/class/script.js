let students = [{name: 'zura', grade: 90}, {name:'mari', grade: 90}, {name: 'taso', grade: 70}];

allPassing = students.every(student => {
    student.grade >= 65;
})

hasFailing = students.some(student => {
    student.grade < 65;
})

students.forEach(student => {
    console.log(`Student: ${student.name}`)
})

let honorRoll = [];

students.forEach(student => {
    if(student.grade >= 90) {
        honorRoll.push(student.name);
    }
})

console.log(allPassing);
console.log(hasFailing);
console.log(honorRoll);
