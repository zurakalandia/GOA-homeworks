let students = [randomName, randomName1, randomName2];

let grades = ['A', 'A', 'A'];

function addStudent(name, grade) {
    students.unshift(name);
    grades.unshift(grade);

    return [students, grades];
};

function removeLastStudent() {
    students.pop();
    grades.pop();

    return [students, grades];
};

function replaceGrade(index, newGrade) {
    grades.splice(index, 1, newGrade);

    return grades;
};

function updateGrades(value) {
    grades.fill(value, 0);

    return grades;
};