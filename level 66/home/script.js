function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;

    this.intorduce = function() {
        return `Hi I'm ${this.name}, a ${this.age} year old ${this.profession}`;
    }
}

let p1 = new Person('Zura', 14, 'Student');

console.log(p1.introduce());