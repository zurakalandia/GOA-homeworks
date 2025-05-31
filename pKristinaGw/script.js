let timer;
const header = document.getElementById("header");
const logo = document.getElementById('Logo')

window.onscroll = function() {
  header.classList.add("fade");

  clearTimeout(timer);
  timer = setTimeout(function() {
    header.classList.remove("fade");
  }, 325);
}

function checkScroll() {
    if (window.scrollY === 0) {
        header.classList.add('top');
        logo.classList.add('top');
    } else {
        header.classList.remove('top');
        logo.classList.remove('top');
    }
}

window.addEventListener('scroll', checkScroll);