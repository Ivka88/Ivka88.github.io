"use strict";

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;

do {
  let userInput = prompt("Введите пароль");

  attempts -= 1;
  if (attempts === 0) {
    alert("У Вас закончились попытки, аккаунт заблокирован!");
    break;
  }
  if (userInput === null) {
    break;
  }

  let input = passwords.includes(userInput);
  if (input) {
    alert("Добро пожаловать!");
    break;
  }
  alert(`Неверный пароль, у Вас осталось ${attempts} попыток`);
} while (true);
