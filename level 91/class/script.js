//1

const nebulaStock = ['stardust', 'quantum core', 'plasma orb'];
const asteroidStock = ['iron shard', 'dark crystal'];
const nebulaBackup = [...nebulaStock];

//2

nebulaBackup = [...nebulaStock, 'gravity lens'];

//3

let str = 'meteor|comet|nova';

let celestialDrops = [...str.split('|')];

//4

let fullInventory = [...nebulaBackup, ...asteroidStock, ...celestialDrops];



