"use strict";
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

function Cashier(name, products) {
  this.name = name;
  this.products = products;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;

  this.greet = function () {
    console.log('Здравствуйте, вас обслуживает: ', this.name);
  };

  this.countTotalPrice = function (order) {
    this.order = order;
    const keys = Object.keys(order);
    for (let key of keys) {
      this.totalPrice += this.order[key] * this.products[key];
    }
  };

  this.getCustomerMoney = function (value) {
    do {
      this.customerMoney = prompt(`Внесите деньги`, '', );
      const isNumber = !Number.isNaN(Number(this.customerMoney));

      if (isNumber) {
        this.customerMoney = Number(this.customerMoney);
        break;
      }
    } while (true);
  };

  this.countChange = function () {
    const result = mango.countChange;
    this.changeAmount = this.customerMoney - this.totalPrice;
    const isInRange = this.totalPrice <= Number(this.customerMoney);

    if (isInRange) {
      mango.onSuccess();
      return this.changeAmount;
    } else {
      mango.onError();
    }

    if (!isInRange) {
      return null;
    }
  };

  this.onError = function () {
    console.log('Очень жаль, Bам не хватает денег на покупки');
    this.reset();
  };

  this.onSuccess = function () {
    const isValidChangeAmount = this.changeAmount !== 0;

    if (isValidChangeAmount) {
      console.log(`Спасибо за покупку, Bаша сдача ${this.changeAmount}`);
      this.reset();
    } else {
      console.log('Спасибо за покупку');
      this.reset();
    }
  };

  this.reset = function () {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };
}

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const mango = new Cashier('Mango', products);
console.log(mango);
console.log(mango.name);
console.log(mango.products);
console.log(mango.totalPrice);
console.log(mango.customerMoney);
console.log(mango.changeAmount);
mango.greet();
mango.countTotalPrice(order);
console.log(mango.totalPrice);
mango.getCustomerMoney(300);
console.log(mango.customerMoney);
mango.countChange();
mango.reset();
console.log(mango.totalPrice);
console.log(mango.customerMoney);
console.log(mango.changeAmount);












// /*
//   Создайте скрипт кассира, который получает список продуктов и деньги,   подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
//     денег или нет, уведомляет покупателя о результате.
// */

// /* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   chicken: 50,
//   cheese: 40,
// };

// /* 
//   Необходимо создать функцию-конструктор Cashier.

//   Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе): 
//     - name - строка, имя кассира, передается при вызове конструктора
//     - productsDatabase - объект база данных продуктов, передается при вызове конструктора
//     - totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0 
//     - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0 
//     - changeAmount - число, сдача, всегда начинается с 0

//     - greet() - метод, выводит в консоль строку `Здравствуйте, вас обслуживает ${имя_кассира}`
//     - countTotalPrice(order) - метод, получает список покупок, считает общую стоимость исходя из 
//         поля productsDatabase. Записывает результат в поле totalPrice.   
//      - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'  
//       - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
// - getCustomerMoney(value) - метод, получает число - деньги покупателя и записывает его в поле customerMoney
//    - onSuccess() - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${сдача}` 
//         если сдача больше 0, и строку `Спасибо за покупку` если сдача равна 0.

//     - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя, 
//         записывает результат в поле changeAmount.
//         * Обязательно проверьте что customerMoney не меньше чем значение поля totalPrice
//         * Если денег было передано достаточно, возвращает текущее значение changeAmount
//         * Если было передано меньше денег чем в поле totalPrice, возвращает null 
// */

// function Cashier(name, productsDatabase) {
//   // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
// }

// /* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
// const order = {
//   bread: 2,
//   milk: 2,
//   apples: 1,
//   cheese: 1
// };

// /* Пример использования */
// const mango = new Cashier('Mango', products);

// // Проверяем исходные значения полей
// console.log(mango.name); // Mango
// console.log(mango.productsDatabase); // ссылка на базу данных продуктов (объект products)
// console.log(mango.totalPrice); // 0
// console.log(mango.customerMoney); // 0
// console.log(mango.changeAmount); // 0

// // Вызываем метод greet
// mango.greet(); // Здравствуйте, вас обслуживает Mango

// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
// mango.countTotalPrice(order);

// // Проверям что посчитали
// console.log(mango.totalPrice); // 110

// // Вызываем getCustomerMoney для запроса денег покупателя
// mango.getCustomerMoney(300);

// // Проверяем что в поле с деньгами пользователя
// console.log(mango.customerMoney); // 300

// // Вызываем countChange для подсчета сдачи
// const result = mango.countChange();

// // Проверяем что нам вернул countChange
// console.log(result); // 190

// // Проверяем результат подсчета денег
// if(result !== null) {
//    // При успешном обслуживании вызываем метод onSuccess
//   mango.onSuccess(); // Спасибо за покупку, ваша сдача 190
// } else {
//   // При неудачном обслуживании вызываем метод onError   
//   mango.onError(); // Очень жаль, вам не хватает денег на покупки
// }



// // Вызываем reset при любом исходе обслуживания
// mango.reset();






// // Проверяем значения полей после reset
// console.log(mango.totalPrice); // 0
// console.log(mango.customerMoney); // 0
// console.log(mango.changeAmount); // 0