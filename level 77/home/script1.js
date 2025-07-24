let div = document.getElementById('myDiv');
let button = document.getElementById('myButton');

function  changeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener('click', function () {
    div.style.backgroundColor = changeColor();
})

//-----------------------

let html = document.getElementById('html');
let js = document.getElementById('js');

let img = document.getElementById('myImg');

html.addEventListener('click', function () {
    img.src = 'html.webp';
});

js.addEventListener('click', function () {
    img.src = 'js.png';
});

//-----------------------

let text = document.getElementById('text');
let textBtn = document.getElementById('textButton');

textBtn.addEventListener('click', function () {
    text.classList.toggle('hide');
});

//----------------------

let span = document.getElementById('counter');
let counterButton = document.getElementById('counterButton');

let count = 0;
span.innerText = count;

counterButton.addEventListener('click', function () {
    count++;
    span.innerText = count;
});

//---------------------------

window.onload = function() {
    let radios = document.querySelectorAll('input[name="answer"]');
    radios.forEach(function(radio) {
        radio.checked = false;
    });
};

let result = document.getElementById('result');

let checkButton = document.getElementById('checkButton');


checkButton.addEventListener('click', function () {
    let selected = document.querySelector('input[name="answer"]:checked');

    if(selected) {
        if(selected.value == 'paris') {
            result.style.color = 'green';
            result.innerText = 'correct';
        } else {
            result.style.color = 'red';
            result.innerText = 'wrong';
        }
    } else {
        result.style.color = 'orange';
        result.innerText = 'please choose an answer';
    }
});
