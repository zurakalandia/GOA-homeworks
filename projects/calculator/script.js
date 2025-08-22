let display = document.getElementById('expression');

let result = document.getElementById('result');

let operators = ['+', '-', '*', '/']

//pressing number keys

function press(char) {
    let lastChar = display.textContent.slice(-1);

    if (operators.includes(char) && (operators.includes(lastChar) || display.textContent == '')) {  //chek if the user is trying to type operators next to each other or in an empty space
        return;
    }

    if (char === '.') {
        if (display.textContent == '' || operators.includes(lastChar)) {  //if the expression ends on an operator or is an empty space, instead of appending just a dot '.' append '0.'
            appendChar('0.');
            return;
        }

        let parts = display.textContent.split(/[\+\-\*\/]/);  //split by operators
        let lastPart = parts[parts.length - 1];

        if (lastPart.includes('.')) {  //check to avoid multiple dots in a single number
            return;
        }
    }

    appendChar(char);

    

    if(/[+\-*/]/.test(display.textContent)) {  //simultaneously calculate the expression while the user types stuff in 
        if(!operators.includes(char)) {
            let evalResult = eval(display.textContent);
            if(isFinite(evalResult)) {
                result.textContent = evalResult;
            } else {
                result.textContent = 'Error';
            }
        } else {
            result.textContent = '';
        }
    }


    display.scrollLeft = display.scrollWidth;  
}

function calculate() {
    if (result.textContent === '' || result.textContent === 'Error') {  //if the result is empty (which means the expression is either invalid or just empty) or its equal to 'Error', stop the calculate function
        return;
    }

    display.textContent = '';

    for(let char of result.textContent) {  //when calculate is pressed take the answer from result and put it into display
        appendChar(char);
    }

    result.textContent = ''  //remove the answer from result
}

function del() {
    let children = Array.from(display.children);
    let lastChild = children.reverse().find(child => !child.classList.contains('beingDeleted'));

    if(lastChild) {
        lastChild.classList.add('pop-out', 'beingDeleted');                    //deleting the last number from the expression with an animation

        lastChild.addEventListener('animationend', () => {
            display.removeChild(lastChild);

            if(display.textContent === '')  {  //after deleting the last number. check if the expressions is empty. if it is, make the result empty as well
                result.textContent = '';
                return;
            }


            if(/[+\-*/]/.test(display.textContent)) {
                if(!operators.includes(display.lastElementChild.textContent)) {  //check so that the last element in the expression isnt an operator and calculate the updated expression
                    let evalResult = eval(display.textContent);
                    if(isFinite(evalResult)) {
                        result.textContent = evalResult;
                    } else {
                        result.textContent = 'Error';
                    }
                } else {
                    result.textContent = '';    //if the last element really IS an operator, make the result empty
                }
            }
        
        });
    }
}

function reset() {
    display.textContent = '';
    result.textContent = '';
}

function appendChar(char) {
    let span = document.createElement('span');
    span.textContent = char;
    span.classList.add('pop-in');
    display.appendChild(span);          //creates spans for numbers instead of just using textContent to allow animations for each number
}

let slider = document.getElementById('slider');

slider.value = 1;

window.addEventListener('load', () => {
    document.body.classList.add('noTransition');   
    document.body.classList.add(`theme1`);
    setTimeout(() => document.body.classList.remove('noTransition'), 100)
})

slider.addEventListener('input', () => {
    document.body.classList.remove('theme1');
    document.body.classList.remove('theme2');
    document.body.classList.remove('theme3');

    document.body.classList.add(`theme${slider.value}`);
})
