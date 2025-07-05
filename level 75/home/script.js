//innerHTML and innerText are both properties used in JavaScript to access or modify the content inside HTML elements, but they behave differently.

//innerText gets or sets visible text only.
//innerHTML gets or sets full content, including both text and tags.

//example

//HTML:

/*
    <div id="box">
        <b>Hello</b> world
    </div>
*/

//JS:

/*
    let box = document.getElementById('box');

    console.log(box.innerText); Output: "Hello world"
    console.log(box.InnerHTML); Output: "<b>Hello</b> world"
*/

let h1 = document.getElementById('h1');

let h2Elements = document.getElementsByClassName('h2');

let pTags = document.getElementsByTagName('p');

h1.innerHTML = '<i>I became italic</i>';
for(let i of h2Elements) {
    i.innerText = 'My text was changed';
};

for(let i of pTags) {
    i.style.color = 'red';
    i.style.fontFamily = 'cursive';
};

console.log(h1.innerHTML, h1.innerText);