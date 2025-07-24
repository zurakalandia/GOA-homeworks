car = {
    brand: 'toyota',
    model: 'corolla',
    color: 'blue'
}

for(let i in car) {
    console.log(i);
}

for(let i in car) {
    console.log(car[i])
}

console.log(`this is a ${car.brand}, specifically a ${car.model}. its color is ${car.color}`)