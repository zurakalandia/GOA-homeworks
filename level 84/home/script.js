let users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" }
];

let formattedEmails = users.map(user => `<${user.email}>`);

//

let numbers = [42, 3, 97, 28, 76, 14, 59, 8, 66, 100];

let newNumbers = numbers.filter(num => num % 2 === 0);

let squaredEvens = newNumbers.map(num => num ** 2);

//

let items = [
  { name: "Apple", price: 2, quantity: 3 },
  { name: "Banana", price: 1, quantity: 5 },
  { name: "Orange", price: 1.5, quantity: 4 }
];

let totalValue = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

//

let words = ['world', 'the', 'hello'];

let sentence = words.reduceRight((acc, word) => {
  if(acc === '') {
    return word;
  }

  return acc + ' ' + word;
}, '') + '.';

//

let studentData = [{
  id: 1, 
  name: 'zura',
  grades: {
    math: [95, 100, 90, 100],
    science: [85, 95, 90, 100],
    history: [80, 85, 90, 85]
  },
  attendance: [true, true, true, false],
  extracurricular: ['coding', 'basketball', 'debates']
},
{
  id: 2, 
  name: 'mari',
  grades: {
    math: [90, 95, 85, 100],
    science: [80, 90, 85, 100],
    history: [95, 100, 95, 90]
  },
  attendance: [true, false, true, false],
  extracurricular: ['music', 'art']
},
{
  id: 3, 
  name: 'taso',
  grades: {
    math: [80, 90, 95, 90],
    science: [80, 90, 85, 95],
    history: [80, 85, 85, 90]
  },
  attendance: [true, true, true, false],
  extracurricular: ['coding', 'basketball', 'debates']
}
]

//1
studentData.forEach(student => console.log(student.name));

//2

let studentNames = studentData.map(student => student.name);

//3

let studentAverages = studentData.map(student => {
  let scoresArrays = Object.values(student.grades);

  let scores = scoresArrays.reduce((acc, array) => acc.concat(array));
  
  let total = scores.reduce((acc, value) => acc + value);
  
  return {
    name: student.name,
    average: total/scores.length
  };
})

//4

let highPerformingStudents = studentAverages.filter(student => student.average >= 85);

//5

let strugglingStudents = studentData.filter(student => {
  let subjectsGrades = Object.values(student.grades);

  return subjectsGrades.some(subject => subject.every(grade => grade < 70));
});

//6

let totalActivities = studentData.reduce((acc, value) => acc + value.extracurricular.length, 0);

//7

let totals = {
  math: {
    score: 0,
    count: 0
  },
  science: {
    score: 0,
    count: 0
  },
  history: {
    score: 0,
    count: 0
  }
}

studentData.forEach(student => {
  for(let subject in student.grades) {
    totals[subject].score += student.grades[subject].reduce((acc, value) => acc + value, 0);
    totals[subject].count += student.grades[subject].length;
  }
})

let highestaverage = 0;
let bestSubject = '';

for(let subject in totals) {
  let average = totals[subject].score / totals[subject].count;
  if(average > highestaverage) {
    highestaverage = average;
    bestSubject = subject;
  }
}

console.log(bestSubject);

//8

let debateStudents = studentData.reduceRight((acc, student) => {
  if(student.extracurricular.includes('debates')) {
    if(acc === '') {
      return student.name;
    }

    return acc + ' and ' + student.name;
  }
  return acc;
}, '');

//9

let allHaveGoodAttendance = studentData.every(student => {
  let count = 0;
  for(let i of student.attendance) {
    if(i) count++; else count--;
  }

  return count > 0;
});

//10

let hasInactiveStudent = studentData.some(student => !student.extracurricular.length);


//11

studentData.forEach(student => {
  for(let subject in student.grades)
    if(student.grades[subject].some(grade => grade === 100)) {
      console.log(`Congratulations, ${student.name}, for achieving a perfect score in ${subject}!`);
    }
});






