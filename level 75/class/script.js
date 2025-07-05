let h1WithId = document.getElementById('h1WithId');

let h1WithClass = document.getElementsByClassName('h1WithClass');

let pWithNothing = document.getElementsByTagName('p');

let listOfElements = [h1WithId, h1WithClass, pWithNothing];

for(let i = 0; i < listOfElements.length; i++) {
    listOfElements[i].style.color = 'red';
    listOfElements[i].style.backgroundColor = 'gray';
    listOfElements[i].style.fontSize = '40px';
    listOfElements[i].style.fontFamily = 'cursive';
};

h1WithId.textContent = 'my style was changed';

h1WithClass.innerText = 'my style was changed';

pWithNothing.innerHTML = 'my style was also changed';


