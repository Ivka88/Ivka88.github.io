"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Введите пароль');
console.log(login);

const checkLoginValidity = function (login) {
    const max = 16;
    const min = 4;
    const lengthLogin = login.length;
    const lengthLoginValid = lengthLogin <= max && lengthLogin >= min;
    return lengthLoginValid;
}

const checkIfLoginExists = function () {
    const logIncludes = logins.includes(login);
    return logIncludes;
}

const addLogin = function (logins, login) {
    if (!checkLoginValidity(login)) {
        return alert('Ошибка! Логин должен быть от 4 до 16 символов');
    }

    if (checkIfLoginExists(logins, login)) {
        return alert('Такой логин уже используется!');
    }

    logins.push(login);
    alert('Логин успешно добавлен!');
};
addLogin(logins, login);



