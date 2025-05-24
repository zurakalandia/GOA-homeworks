let me = {
    name: 'Zura',
    lName: 'Kalandia',
    age: 14,
    height: 187.5,
    hobby: 'learning coding',
    favColor: 'purple',
    sentence: function() {
        return `Hello, my name is ${this.name} ${this.lName}. I am ${this.age} years old and ${this.height}cm tall. my hobby is ${this.hobby} and my favorite color is ${this.favColor}`
    }
}

console.log(me.sentence())