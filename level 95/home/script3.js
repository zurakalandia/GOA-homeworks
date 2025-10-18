function asyncPromiseFunction(work) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(!work) {
                reject('something went wrong');
            }
            resolve(work);
        }, 2000);
        
    }
    )
}

asyncPromiseFunction('work3')
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    }) 



