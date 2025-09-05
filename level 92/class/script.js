class User {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    info() {
        return `My name is ${this.name} ${this.lastName}. I am ${this.age} years old`;
    }
}

let p1 = new User('Zura', 'Kalandia', 'Age');

console.log(p1.info());