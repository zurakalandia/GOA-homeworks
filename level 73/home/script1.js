function calculateAge(year, month, day) {
    let birth = new Date(year, month - 1, day);

    let now = new Date();

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();


    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months, days };
}

console.log(calculateAge(2010, 7, 30));

