const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        // resolve({
        //     data:'resolved data',
        //     dataNum: 1
        // });
        reject('rejected data');
    }, 5000);   
});
console.log('before');
//then is a callback to resolve the data
//resolved or rejected only once. if A SECOND CALLL IS MADE THAT would be ignored
//reject will throw the specified messgae a s a javascript error this can be handled using catch block for then

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
});
//firebase.google.com/docs/guides
/*alternate way of defining catch:
promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log('error: ', error);
});
*/