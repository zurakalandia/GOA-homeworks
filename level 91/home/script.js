//1

const baseIngredients = ['water', 'herb', 'crystal'];

let clone = ['phoenix feather', ...baseIngredients];

let array = ['moon dust', 'sun ray'];

clone = [...clone, ...array];

//2

const dna = 'A|T|G|C|A|G';

let array1 = dna.split('|');

let result = [];

for(let i of array1) {
    if(array1.indexOf(i) > 0) {
        result.push('X');
    }
    result.push(i);
}

//3 

const baseStats = { defense: 40, durability: 80 };
const enchantment = { durability: 100, magicResist: 25 };

let finslStats = {...baseStats, ...enchantment};

let finalStats = {...finalStats, weight: 10};

//4

const thoughts = ['idea1', 'idea2', 'idea3', 'idea4'];

let [idea1, idea2, ...remainingThoughts] = thoughts;

let newThoughts = [...thoughts, 'reactor'];







