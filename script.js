// object

// const phoneBook = {
//     list:{
//     'igor': 2345,
//     'ivan': 1237,
//     'elena':903456
//     },
//     add(name,number){
//         this.list[name] = number;
//     },
//     delete(name){
//         delete this.list[name]
//     }
// }
// // phoneBook.list.elena = 2222222;
// // phoneBook.add('misha',56789);
// // phoneBook.add('liza',3489);
// // phoneBook.delete('ivan');
// // console.log('ivan' in phoneBook.list);

// // // console.log(phoneBook.list);
// // for( const name in phoneBook.list){
// //     console.log(`${name} - ${phoneBook.list[name]}`);
// //     // console.log(phoneBook.list[name]);
// // }
// const phone_Book = Object.assign({},phoneBook)
// // const phone_Book = {...phoneBook};
// console.log(phone_Book);

// let str = `Hello`;

// // получаем первый символ
// console.log( str[0] ); // H
// console.log( str.at(3) ); // H

// получаем последний символ
// console.log( str[str.length - 1] ); // o

// console.log( str.at(-3) ); // o

// let strSec = 'Widget with id';

// console.log( strSec.indexOf('W') ) // 12

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   console.log( `Найдено тут: ${foundPos}` );
//   pos = foundPos;
//   ++pos; // продолжаем со следующей позиции
// }
// let str = "stringify";
// // 'strin', символы от 0 до 5 (не включая 5)
// console.log( str.slice(0, 5) );
// // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
// console.log( str.slice(0,2) );

// Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль. 
// function showVerticalMessage(str){
//     if (str.length > 7){
//         str = str.slice(0,6)
//     }
//     for(let char of str){
//         if (char.startsWith('s')){
//             // char="S"+ char.slice(1);
//             char=char[0].toUpperCase() + char.slice(1);
//         }      
//         console.log(char);
//     }
// }
// showVerticalMessage('stradastrada');
// let toDoList = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];
// let firstTwoTasks = toDoList.splice(0, 1,'eat','drink');
// console.log(firstTwoTasks);
// console.log(toDoList);
// let toDoList = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];
// let firstTask = toDoList.splice(2,2,'drink')
// for(const task of toDoList){
//     console.log(task);
// }

const users = ['Ivan','Petr','Elena']
users.forEach(user =>{
    console.log(user);
})

// const numbers = [1,2,3,4,5,6,7,8,9];
// numbers.forEach(number => {
//     console.log(`Number is ${number}`);
// })

// const animals = ['lion','cat', 'dog', 'elephant', 'tiger', 'lion'];
// const secondLionIndex = animals.find(animal => animal.length >= 5);
// console.log(secondLionIndex); // 5

// const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
// const longWords = animals.filter(word => word.length < 5);
// console.log(longWords); // ['elephant']

// const numbers = [1, 11, -2, 3, -10, 4];
// // const negativeNumbers = numbers.filter(number => number < 0);
// // console.log(negativeNumbers);
// const absoluteNumbers = numbers.map(number => Math.abs(number))
// console.log(absoluteNumbers);

// const numbers = [1, 11, -2, 3, -10, 4];
// const sortedNumbers = numbers.sort((a, b) => b - a);
// console.log(sortedNumbers); 

// const string = 'cat,dog,elephant';
// const animals = string.split(',');
// console.log(animals); // ['cat', 'dog', 'elephant']
// let count = 0;

// function logCount() { // функция
// 	let count = 1; // объявим локальную переменную count
// 	console.log(count); // 0 или 1 ?
// }

// logCount(); // ???

// let count = 0;

// function logCount() {
// 	console.log(count)
// }

// count = 40;
// logCount(); // ???



// function incrementCount() {
//     let count = 0;
//     return function (){
//        return ++count;
//     }
// 	 // переменная count доступна из замыкания
// }
// let counterA = incrementCount();
// let counterB = incrementCount();
// console.log(counterA());
// console.log(counterA());
// console.log(counterB());
// console.log(counterB());
// console.log(counterB());

// function sayMyName() {
// 	console.log('Anatolii');
// }

// setTimeout(sayMyName, 5000);
// sayMyName()

// function hello() {
// 	console.log('привет');
// }
// function goodbye() {
// 	console.log('пока');
// }

// setTimeout(hello, 2000);
// goodbye();

// let timer;
// let x = 11;
// function countDown(){
//     x--;
//     if(x <= 0){
//         clearTimeout(timer)
//         console.log(`время вышло`);

//     }else{
//         timer = setTimeout(countDown,1000)
//         console.log(`осталось секунд: ${x}`);
        
//     }
   
// }
// countDown()
// // 
// let secondTimer;
// let z = 11;
// function countDownSecond(){
//     z--;
//     console.log(`осталось секунд: ${z}`);
//      if( z <= 1) {
//         clearInterval(secondTimer)
//         console.log('Time is over');
//      } 
// }
// secondTimer = setInterval(countDownSecond,1000)
// countDownSecond()

function buildFun(n){

	var res = []

	for (var i = 0; i< n; i++){
		res.push((i => () => i)(i));
	}

	return res
}
buildFun(6)