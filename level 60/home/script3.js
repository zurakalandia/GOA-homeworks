let num = Number(prompt('Enter the day as a number in a week: '));

switch(num) {
    case 1:
        console.log('Sunny');
        break;
    case 2:
        console.log('Rainy');
        break;
    case 3:
        console.log('Cloudy');
        break;
    case 4:
        console.log('Windy');
        break;
    default:
        console.log('Unknown')
}