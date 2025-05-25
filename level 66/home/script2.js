function User(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;

    this.getDetails = function() {
        return `Username: ${this.userName}\nEmail: ${this.email}`;
    }
}

let user1 = new User('Coems', 'mafaka123@gmail.com', '1234567890');

console.log(user1.getDetails());