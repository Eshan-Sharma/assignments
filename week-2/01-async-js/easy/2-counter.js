function countInterval(){
    let count = 0;
    let countTimed = setInterval(()=>{
        count++;
        console.log(count);
    },1000);
}

countInterval()