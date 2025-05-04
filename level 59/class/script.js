let grade = Number(prompt('Enter your grade: '));

if(grade <= 25) {
    console.log('წადი ისწავლე და მერე მოდი');
} else if(grade <= 50) {
    console.log("D")
} else if(grade <= 65) {
    console.log("C")
} else if(grade <= 80) {
    console.log('B')
} else if(grade <= 100) {
    console.log('A')
}