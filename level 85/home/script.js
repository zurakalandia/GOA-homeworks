//1

let users = [{
    id: 1,
    name: 'name1'
},
{
    id: 2,
    name: 'name2'
},
{
    id: 3,
    name: 'name3'
}
];

let userWithId3 = users.find(user => user.id === 3);

//2

let colors = ['red', 'orange', 'yellow', 'green'];

colors.reverse;

//3

let prices = [17.99, 99.99, 49.99, 6.99];

prices.sort((a, b) => b - a);

//4

let string = 'Hello world!';

let characters = Array.from(string);

//5

let data1 = [0, 1, 2, 3, 4, 5];

let data2 = 'string';

isData1Array = Array.isArray(data1);

isData2Array = Array.isArray(data2);

//6

let courses = [
  {
    id: "CS101",
    name: "Intro to Programming",
    capacity: 40,
    credits: 3,
    isActive: true,
    students: [
      { name: "Alice", grades: [85, 90, 78] },
      { name: "Bob", grades: [70, 72, 68] }
    ]
  },
  {
    id: "MA201",
    name: "Calculus",
    capacity: 25,
    credits: 4,
    isActive: true,
    students: [
      { name: "Charlie", grades: [95, 88, 92] },
      { name: "Diana", grades: [60, 75, 80] }
    ]
  },
  {
    id: "PH301",
    name: "Physics",
    capacity: 50,
    credits: 3,
    isActive: false,
    students: [
      { name: "Eve", grades: [85, 87, 90] }
    ]
  }
];

let studentNamesString = "Alice, Bob, Charlie, Diana, Eve";

//tasks

//1

console.log(Array.isArray(courses));

console.log(Array.isArray(studentNamesString));

//2

let allStudentNames = studentNamesString.split(', ');
console.log(allStudentNames);

//3

courses.forEach(course => {
        console.log(course.id);
        console.log(course.name);
    }
);

//4

let courseNames = courses.map(course => course.name);
console.error.log(courseNames);

//5

let courseAverages = courses.map(course => {
    let total = course.students.reduce((acc, student) => {
        return acc + student.grades.reduce((acc, grade) => acc + grade, 0);
    }, 0);

    let count = course.students.reduce((acc, student) => acc + student.grades.length, 0);
    
    return {
        id: course.id,
        average: total / count
    }
});

console.log(courseAverages);

//6

let activeCourses = courses.filter(course => course.isActive);

console.log(activeCourses);

//7

let calculusCourse = courses.find(course => course.id === 'MA201');
console.log(calculusCourse)

//8

courses.forEach(course => {
    if(course.students.every(student => student.grades.some(grade => grade >= 70))) {
        console.log(`Every student in ${course.name} course has at least one grade eof 70 or higher`);
    } else {
        console.log(`Every student in ${course.name} course does not have at least one grade eof 70 or higher`);
    }
})

//9

console.log(courses.some(course => course.capacity < 30));

//10

let coursesByCapacity = courses.sort((a, b) => a.capacity - b.capacity);
console.log(coursesByCapacity)

//11

coursesByCapacity.reverse();
console.log(coursesByCapacity);

//12

console.log(courses.reduce((acc, course) => acc + course.credits, 0));

//13

let coursesString = activeCourses.reduceRight((string, course) => {
  if(string) {
    string += course.name;
  } else {
    string += course.name;
  }

  return string;
}, '');

console.log(coursesString);



