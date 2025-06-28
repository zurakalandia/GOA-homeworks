function dayOfWeek(year, month, day) {
    let date = new Date(year, month - 1, day);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
};