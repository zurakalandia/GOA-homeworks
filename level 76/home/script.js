let paragraph = document.createElement('p');
paragraph.innerText = 'This is a paragraph';
document.body.appendChild(paragraph);



let subheading = document.createElement('h2');
subheading.innerText = 'Subheading';
document.body.appendChild(subheading);
subheading.innerText = 'Updated Subheading';



let div = document.createElement('div');
div.innerText = 'this is a div';
document.body.appendChild(div);
document.body.removeChild(div);



let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.innerText = 'Item 1';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerText = 'Item 2';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.innerText = 'Item 3';
ul.appendChild(li3);

document.body.appendChild(ul);

console.log(ul.firstElementChild);
console.log(ul.lastElementChild);



let h3 = document.createElement('h3');
h3.innerText('Inserted Heading');
document.body.insertBefore(h3, document.body.firstElementChild); //inserting elements (what to insert, before what to insert)



let span = document.createElement('span');
span.innerText = 'This is a span';
document.getElementById('container').appendChild(span);
console.log(span.parentElement); //parent element






