//1

let div = document.getElementById('myDiv')

div.classList.add('highlight');
div.classList.remove('highlight');


let button = document.getElementById('toggleButton');
let targetDiv = document.getElementById('targetDiv');

button.addEventListener('click', function() {
    targetDiv.classList.toggle('active');
});


let p = document.getElementById('checkParagraph');
p.classList.add('important');
console.log(p.classList.contains('important')); //check if element contains class


let replaceDiv = document.getElementById('replaceDiv');
replaceDiv.classList.add('red');
replaceDiv.classList.replace('red', 'blue'); //replace class



let itemDiv = document.getElementById('itemDiv');
itemDiv.classList.add('class1', 'class2', 'class3');

console.log(itemDiv.classList.item(1)) //access class thru index



//2

let ul = document.getElementById('list');

let newLi = document.createElement('li');

newLi.innerText = 'item 4';

ul.appendChild(newLi);

ul.removeChild(ul.firstElementChild);

ul.children[0].innerText = 'changed specific item'; //access children thru index



//3

let myP = document.getElementById('myParagraph');

myP.innerText = 'New text content!'


//4

document.getElementById('styledDiv').style.backgroundColor = 'light blue';

document.getElementById('styledDiv').style.color = 'dark blue';

//5

let myUl = document.getElementById('myList');

let myUlLi = document.createElement('li');

myUlLi.innerText = 'new list item';

myUl.appendChild(myUlLi);

//6

let removableList = document.getElementById('removableList');

ul.removeChild(ul.children[1]);

//7

let img = document.getElementById('myImage');

img.src = 'js.png';

img.alt = 'updated image';







