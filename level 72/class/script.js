function loveCalculator() {
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;

    let loveChance = Math.floor((Math.random() * 101));

    if(name1 == '' || name2 == '') {
        alert('შეიყვანეთ სახელები');
    } else {
        alert(`${name1} და ${name2} თქვენი სიყვარულის პროცენტია ${loveChance}%`);
    }  
};



