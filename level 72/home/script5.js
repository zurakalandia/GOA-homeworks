function loveCalculator() {
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;

    let loveChance = Math.floor(Math.random() * 101);

    let result = document.getElementById('result');

    if (name1 == '' || name2 == '') {
        result.textContent = "Don't leave the names empty";
        result.classList.add('red');
    } else {
        result.classList.remove('red');
        result.textContent = 'Calculating...'
        setTimeout(function () {
            result.textContent = `${loveChance}% Chance of love`;
        }, 2000)
        
    }

};