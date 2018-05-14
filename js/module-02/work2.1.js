"use strict";

const numbers = [];
let userInput;
let total = 0;

do {
  let userInput = prompt("Введите числo");

  if (!isNaN(userInput)) {
    numbers.push(+userInput);
    console.log(numbers);
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }

  if (userInput === null) {
    break;
  }
} while (true);

if (userInput !== "" || userInput !== null) {
  let total = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  alert(`Общая сумма чисел равна ${total}`);
  console.log(total);
}
