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
        if (isValidRest && choisRest <= 25) {
            alert(`В группе Taba есть ${spaceTaba} мест, Вам необходимо ${choisRest}`);
            alert(`В группе Sharm есть ${spaceSharm} мест, Вам необходимо ${choisRest}`);
            alert(`В группе Hurgada есть ${spaceHurgada} мест, Вам необходимо ${choisRest}`);
        }
        else {
            alert("Извините, мест нигде нет");
        }
        if (choisRest <= spaceTaba) {
            var ischois = confirm(`В группе Taba есть ${choisRest} мест, хотите остаться?`);
            if (ischois === true) {
                const residual = spaceTaba - choisRest;
                console.log(residual);
                alert("Приятного путешествия в группе Taba");
            }
            else {
                alert("Нам очень жаль, приходите еще!");
            }
        }
        else if (choisRest <= spaceSharm) {
            var ischois = confirm(`В группе Sharm есть ${choisRest} мест, хотите остаться?`);
            if (ischois === true) {
                const residual = spaceSharm - choisRest;
                console.log(residual);
                alert("Приятного путешествия в группе Sharm");
            }
            else {
                alert("Нам очень жаль, приходите еще!");
            }
        }
        else if (choisRest <= spaceHurgada) {
            var ischois = confirm(`В группе Hurgada есть ${choisRest} мест, хотите остаться?`);
            if (ischois === true) {
                const residual = spaceHurgada - choisRest;
                console.log(residual);
                alert("Приятного путешествия в группе Hurgada");
            }
            else {
                alert("Нам очень жаль, приходите еще!");
            }
        }
    }
    else {
        alert("Ошибка ввода");
    }

