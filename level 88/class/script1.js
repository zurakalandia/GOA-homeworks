let numbers = {
    one: 1,
    two: 2,
    three: 3
}

let {one, two, three} = numbers; //properties unpack

console.log(one);
console.log(two);
console.log(three);

let nestedObj = {
    courseName: 'physics',
    students: {
        student1: 'zura',
        student2: 'mari'
    }
}

let {courseName, students: {student1, student2}} = nestedObj; //unpack nested object

let nums = {
    one: 1,
    two: 2,
    three: 3
}

let {one:first, two:second, three:third} = nums; //change names