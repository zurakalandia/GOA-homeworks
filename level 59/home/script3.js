let degree = prompt('Enter temperature');

if(degree <= 10) {
    console.log('Cold')
} else if(degree <= 25) {
    console.log('Normal');
} else {
    console.log('Hot');
}