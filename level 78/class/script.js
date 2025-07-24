let images = ['html.webp', 'css.jpg', 'js.png'];

let num = 0;

let slider = document.getElementById('sliderImg');

function next() {
    num++;

    if(num >= images.length) {
        num = 0;
    }

    slider.src = images[num];
};

function prev() {
    num--;

    if(num < 0) {
        num = images.length - 1;
    }

    slider.src = images[num];
}