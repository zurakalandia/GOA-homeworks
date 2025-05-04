let choice = Number(prompt('Enter your coffe type as a number: '));

switch(choice) {
    case 1:
        console.log('Americano');
        break;
    case 2:
        console.log('Espresso');
        break;
    case 3:
        console.log('Cappuccino');
        break;
    default:
        console.log('Unknown');
}