/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    // let date = new Date()
    // console.log(date.toUTCString());
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        //     // let date = new Date();
        //     // console.log(date.toUTCString());
        //     // return date.toUTCString();
        },n*1000);

    });
    
}
// wait(2000)
module.exports = wait;
