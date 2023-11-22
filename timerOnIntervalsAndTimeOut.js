//Timer on setTimeout
let timer;
let x = 11;
function countDown(){
    x--;
    if(x <= 0){
        clearTimeout(timer)
        console.log(`время вышло`);

    }else{
        timer = setTimeout(countDown,1000)
        console.log(`осталось секунд: ${x}`);
        
    }
   
}
countDown()
//Timer on setInterval
let secondTimer;
let z = 11;
function countDownSecond(){
    z++;
    console.log(`осталось секунд: ${z}`);
     if( z <= 1) {
        clearInterval(secondTimer)
        console.log('Time is over');
     } 
}
secondTimer = setInterval(countDownSecond,1000)
countDownSecond()