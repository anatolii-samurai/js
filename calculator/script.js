"use strict";

const equally = document.getElementById('equally');
const firstItem = document.querySelector('.first_item');
const secondItem = document.querySelector('.second_item');
const selectOperation = document.getElementById('symbols');
const resultEnd = document.querySelector('.result');

function sum (a , b){
    return a + b;
}

function subtr (a , b){
    return a - b;
}

function multi (a , b){
    return a * b;
}

function division (a , b){
    if (b == 0){
        alert("На ноль делить нельзя!")
    }else{
        return a / b;
    }
    
}

const OPERATION = {
    sum: '+',
    subtr: '-',
    multi: '*',
    division: '/'
};
function calculate ({a, b, operation}){
       let result = null;
       switch (operation){
        case OPERATION.sum:
            result = sum(a,b);
            break;
        case OPERATION.subtr:
            result = subtr(a,b);
            break;
        case OPERATION.multi:
            result = multi(a,b);
            break;
        case OPERATION.division:
            result = division(a,b);
            break;
        default:
            break;
       }
        return result;
}


equally.addEventListener('click',()=>{
    const a = Number(firstItem.value);
    const b = Number(secondItem.value)
    const operation = selectOperation.value
    const result = calculate({a,b,operation})
    console.log(result);
    resultEnd.textContent = result
})
