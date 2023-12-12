function timer(){
    let time = setInterval(()=>{
        let date = new Date();
        console.log(date.toUTCString());
    }, 1000);
}

timer();