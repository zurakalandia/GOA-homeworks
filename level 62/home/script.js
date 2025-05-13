let password = 'Group 41 is best';

let tries = 3;

while(tries > 0) {
    guess = prompt('Enter the password');
    if(guess === password) {
        alert('Correct');
        break;
    } else {
        tries--;
        alert(`Incorrect, Tries: ${tries}`);
        if(tries === 0) {
            alert('0 Tries');
        }
    }
}
