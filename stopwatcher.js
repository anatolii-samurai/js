
    const btnStart = document.querySelector('.btn_start');
    const btnStop = document.querySelector('.btn_stop');


    let timerInterval = null;
    let time = 0;
    let statusTimer = 'stopped';
   
   btnStart.addEventListener('click',function(){
    startTimer();
    
   })
   btnStop.addEventListener('click',stopTimer)
  function stopTimer(){
    clearInterval(timerInterval)
    timerInterval = null
    time = 0
    btnStart.textContent = 'start';
    statusTimer = 'stopped'
    console.log('stop');
  }
  function startTimer(){
    if(statusTimer == 'stopped'){
      timerInterval = setInterval(incrementTime,1000);
      btnStart.textContent = 'pause||';
      statusTimer = 'started';
    }else{
      clearInterval(timerInterval);
      btnStart.textContent = 'start';
      statusTimer = 'stopped'
    }
 }
 function incrementTime(){
  time++;
  console.log(time); 
 }



