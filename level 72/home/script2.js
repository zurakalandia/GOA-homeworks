let friends = [
    {name: 'Givi', money: 20.00}, 
    {name: 'Datuka', money: 0.00}, 
    {name: 'Datuna', money: 100.00}, 
    {name: 'Nika', money: 20.00}, 
    {name: 'Zura', money: 100.00}];

function specialFriend(friends, money) {
    let chosen = friends[Math.floor(Math.random() * friends.length)];

    return `${chosen.name} pays \n
    payment: ${chosen.money.toFixed(2)} - ${money.toFixed(2)} \n
    balance: ${(chosen.money - money).toFixed(2)}`
};

console.log(specialFriend(friends, 50));