function greeting() {
    let now = new Date();
    let hours = now.getHours();
    let answer;


    if(hours < 12) {
        answer = 'Good morning';
    } else if (hours < 18) {
        answer = 'Good afternoon';
    } else {
        answer = 'Good evening';
    }

    return answer;
};

setInterval(greeting, 100);