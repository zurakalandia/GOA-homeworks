let headingOne = document.getElementById('counter');

let count = 0;

function plus() {
        count++
        headingOne.textContent = count;
        headingOne.classList.remove('animation');
        setInterval(() => headingOne.classList.add('animation'), 1);
        
        if(count > 0){
            headingOne.style.color = 'green';
        }

        if(count == 0){
            headingOne.style.color = 'white';
        }
};


function minus() {
        count--;
        headingOne.textContent = count;
        headingOne.classList.remove('animation');
        setInterval(() => headingOne.classList.add('animation'), 1);
        if(count < 0){
            headingOne.style.color = 'red';
        }

        if(count == 0){
            headingOne.style.color = 'white';
        }
};



function res() {
    count = 0;    
    headingOne.textContent = count;
    headingOne.classList.remove('animation');
    setInterval(() => headingOne.classList.add('animation'), 1);
    headingOne.style.color = 'white';
};