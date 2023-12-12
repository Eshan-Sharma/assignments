function counter(){
    let count = 0;
    let countTimer = setInterval(()=>{
        count++;
        console.log(count);
    },1000)
}

counter();