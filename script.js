const num = 20;

if(num < 49){
    console.log('Error');
} else if (num > 100 ){
    console.log('Много');
} else {
    console.log('ok');
}

console.log( NaN && 2 && undefined );

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}else{
    console.log('error');
}
