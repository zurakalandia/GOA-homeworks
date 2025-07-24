let list1 = [0, 1, 2, 3, 4];

let list2 = ['a', 'b', 'c', 'd'];

let mergedArray = list1.concat(list2);

mergedArray.shift();

let p = document.querySelector('p');

p.style.color = 'red';

let button = document.getElementById('button');

button.addEventListener('click', function () {
    p.style.color = 'green';
});