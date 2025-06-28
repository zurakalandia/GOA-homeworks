function leapYear(year) {
    let res = '';
    if(year % 4 === 0) {
        res = 'Leap';
        if(year % 100 === 0) {
            res = 'not Leap';
            if(year % 400 === 0) {
                res = 'Leap'
            }
        }
    }
    return res
};

