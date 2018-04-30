"use strict"

   
    const Sharm = 0;
    const Hurgada = 1;
    const Taba = 2;
    const spaceSharm = 15;
    const spaceHurgada = 25;
    const spaceTaba = 6;
    const choisRest = Number(prompt('Введите количество необходимых мест.'));
    const asNumber = Number(choisRest);
    console.log(choisRest);
    const isValidRest = choisRest !== null && !Number.isNaN(choisRest);
    console.log(isValidRest);
    if (isValidRest) {
        if (choisRest <= spaceTaba) {
            var ischois = confirm(`В группе Taba есть ${choisRest} мест, хотите остаться?`);
        }
        if (ischois === true) {
            const residual = spaceTaba - choisRest;
            console.log(residual);
            alert("Приятного путешествия в группе Taba");
            throw "stop";
        }
        if (choisRest >= spaceTaba) {
            var ischois = confirm(`В группе Taba нет ${choisRest} мест, хотите посмотреть в группе Sharm?`);
        }
        if (ischois === true) {
        }
        else {
            alert("Нам очень жаль, приходите еще!");
            throw "stop";
        }
        if (ischois === true && choisRest <= spaceSharm) {
            var ischois = confirm(`В группе Sharm есть ${choisRest} мест, хотите остаться?`);
        }
        if (choisRest <= spaceSharm && ischois === true) {
            const residual = spaceSharm - choisRest;
            console.log(residual);
            alert("Приятного путешествия в группе Sharm");
            throw "stop";
        }
        if (choisRest >= spaceSharm) {
            var ischois = confirm(`В группе Sharm нет ${choisRest} мест, хотите посмотреть в группе Hurgada?`);
        }
        if (ischois === true) {
        }
        else {
            alert("Нам очень жаль, приходите еще!");
            throw "stop";
        }
        if (ischois === true && choisRest <= spaceHurgada) {
            var ischois = confirm(`В группе Hurgada есть ${choisRest} мест, хотите остаться?`);
        }
        if (choisRest <= spaceHurgada && ischois === true) {
            const residual = spaceHurgada - choisRest;
            console.log(residual);
            alert("Приятного путешествия в группе Hurgada");
            throw "stop";
        }
        if (choisRest >= spaceHurgada) {
            var ischois = confirm(`В группе Hurgada нет ${choisRest} мест.`);
        }
        if (ischois === true) {
        }
        else {
            alert("Нам очень жаль, приходите еще!");
            throw "stop";
        }
    }
    else {
        alert("Ошибка ввода");
        throw "stop";
    }


  