student = {
    name: 'Nolan',
    age: 19,
    faculty: 'biology',
    course: 'medical',
    score: 95
}

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.faculty);
console.log(student.course);
console.log(student.score);

console.log(student['name']);
console.log(student['age']);
console.log(student['faculty']);
console.log(student['course']);
console.log(student['score']);

console.log(`${student.name} is ${student.age} years old. He has a ${student.faculty} and is on a ${student.course} course. His average score is ${student.score}`);

