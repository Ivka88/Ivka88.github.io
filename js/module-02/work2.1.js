
"use strict"


const numbers = [];
let userInput;
while (true) {
let userInput = prompt("Введите числo");
console.log(userInput);
if (userInput !== null && !isNaN(userInput)) numbers.push(+userInput);
console.log (numbers);
if (userInput === "" || userInput === null ) break;
if (!isNaN(userInput)) {
} else {
alert ("Было введено не число, попробуйте еще раз");
}
}
let total = 0;
for (let i = 0; i < numbers.length; i += 1) {
total += numbers[i];
} 
alert(`Общая сумма чисел равна ${total}`);
console.log (total);
