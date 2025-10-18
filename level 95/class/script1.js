function fetchData(data) {
    return new Promise((resolve, reject) => {
        let success = Math.random() > 0.3
        console.log('fetching data...');

        setTimeout(() => {
            if (!success) {
                reject(Error("Network error"));
            }
            resolve(data);
        }, 2000);
    })
}

fetchData('data 1')
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })