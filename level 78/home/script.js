let slider = document.getElementById('slider')

let array = ['python1.png', 'js.png', 'c.png', 'c+.png'];

let dots = document.getElementsByClassName('dot');

let index = 0;


slider.addEventListener('mouseenter', () => {
    setTimeout(() => {
        slider.classList.remove('animation');
    }, 1)
    
})


function changeImage(newIndex) {
    dots[index].classList.remove('blue');
    

    slider.classList.remove('animation');
    setTimeout(() => {
        slider.classList.add('animation');
        slider.src = array[newIndex];
        dots[newIndex].classList.add('blue');
    }, 1)
    
    index = newIndex;

}

function prev() {
    let newIndex = index - 1
    if(newIndex < 0) {
        newIndex = array.length - 1;
    }
    changeImage(newIndex);
}

function next() {
    let newIndex = index + 1
   
    if(newIndex >= array.length) {
        newIndex = 0;
    }
    changeImage(newIndex);
}

