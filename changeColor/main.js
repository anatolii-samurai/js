
const changeBackground = document.getElementById('change-bg');
let timerColor = null;
let statusBtn = 'stop'

changeBackground.addEventListener('click',startChange)
function changeColor(){
    const colors = ['red', 'blue', 'green', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
function startChange(){
    if (statusBtn == 'stop'){
        timerColor = setInterval(changeColor,1000)
        statusBtn = 'start';
        changeBackground.textContent = 'Stop'
    }else if (statusBtn == 'start'){
        clearInterval(timerColor)
        changeBackground.textContent = 'Change color'
        statusBtn = 'stop'
        
    }
    console.log(statusBtn);
}

