let div = document.querySelector('div');

function increase() {
    div.classList.add('big');
    div.classList.remove('small');

};

function reduce() {
    div.classList.add('small');
    div.classList.remove('big');
};
