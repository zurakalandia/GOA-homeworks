let form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.defaultPrevented();
    console.log(getElementById('name').value);
})