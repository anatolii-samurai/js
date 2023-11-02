// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
// let rightAnswer = (year > 2015) ? console.log('Earlier'):
// (year < 2015) ? console.log('Later'):
// console.log('Right');



// if (rightAnswer) {
//     console.log( 'Вы правы!' )
// }else if(year > 2015){
//     console.log("Earlier");
// }else if(year < 2015){
//     console.log("Later");
// }
//  let workHour = prompt('Рабочее время нашего магазина','');

//  if(workHour > 10 && workHour < 18){
//     console.log('w');
//  }else{
//     console.log('c');
//  };
// function checkAge(age){
//     if( age < 18){
//         console.log('You are not allowed');
//     }else if(age >= 18){
//         console.log("You are welcome");
//     }
// }
// checkAge(18);
// function add(a,b,operation){
//     operation = sum;
//     return sum = a + b;
// }
// console.log(add(1,2,sum));
// let add = '+';
// function calc(a,b,operation){
//     if(operation === 'add'){
//         return a + b
//     }else if (operation === 'multi'){
//         return a * b
//     }else if (operation ==='substract'){
//         return a - b
//     }
// }
// console.log(calc(1, 2, 'add'));
// console.log(calc(1, 2, 'multi'));
// console.log(calc(3, 2, 'substract'));
let add = 0;
function calc(a,b,operation){
    switch(operation) {
            case add:
                return a + b;
                case 'multi':
                    return a * b;
                        case 'substract':
                            return a - b;

    } 
}
console.log(calc(8, 2, add));
console.log(calc(6, 2, 'multi'));
console.log(calc(3, 2, 'substract'));