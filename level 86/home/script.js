let name = 'Zura';
let lastName = 'Kalandia';

createObject((name, lastName) => ({name, lastName, sentence() {return `Hello, ${name} ${lastName}`}}));

prop = 'key';

object = {
    [prop]: 'value'
};