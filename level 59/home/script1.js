let age = Number(prompt('Enter your age: '));

let gender = prompt('Enter your gender: ');

let income = Number(prompt('Enter your income'));

if(age >= 18) {
    if(gender == 'female') {

        if(income <= 3000) {
            console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
        } else if(income <= 5000) {
            console.log()
        } else if(income > 5000) {
            console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
        }
    
    
    } else if(gender == 'male') {
        if(income <= 4000) {
            console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
        } else if(income <= 6000) {
            console.log("შემოსავალი სტაბილურია");
        } else if(income > 6000) {
            console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
        }
    }
    
} else {
    console.log('მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია');
}