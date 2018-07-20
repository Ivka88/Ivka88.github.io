"use strict";

/* 
  Сеть фастфудов предлагает несколько видов гамбургеров. 
  
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
	
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
	
  Дополнительно, гамбургер можно: 
	- посыпать приправой (+10 денег, +0 калорий) 
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход, 
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин. 
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать 
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
  constructor (size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
}

/* 
  Размеры, виды добавок и начинок объявите как статические поля класса.
  Добавьте отсутсвующие поля по аналогии с примером.
// */
static SIZE_SMALL = 'SIZE_SMALL';
static SIZE_LARGE = 'SIZE_LARGE';

static SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  },
};

static STUFFING_CHEESE = 'STUFFING_CHEESE';
static STUFFING_SALAD = 'STUFFING_SALAD';
static STUFFING_MEAT = 'STUFFING_MEAT';

static STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};
					
static TOPPING_SPICE = 'TOPPING_SPICE';
static TOPPING_SAUCE = 'TOPPING_SAUCE';

static TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

  /**
   * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
   * @param {String} topping - Тип добавки
   */
  addTopping(topping) { 
    !this.toppings.includes(topping) 
      ? this.toppings.push(topping) : this.toppings;
  }

  /**
   * Убрать topping, при условии, что она ранее была добавлена
   * @param {String} topping - Тип добавки
   */
  removeTopping(topping) {
    this.toppings = this.toppings.filter(element => {
      return element !== topping
    });
  }

  /**
   * Получить список toppings
   *   - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
   */
  getToppings () {
    return this.toppings;
  }
  /**
   * Узнать размер гамбургера
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
   */
  getSize () {
    return this.size;
  }

  /**
   * Узнать начинку гамбургера
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
   */
  getStuffing () {
    return this.stuffing;
  }


  /**
   * Узнать цену гамбургера
   * @returns {Number} - Цена в деньгах
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
   */

  calculatePrice() {
    const toppingPrice = this.toppings.reduce((arr, value) => {return arr + Hamburger.TOPPINGS[value].price;}, 0);
    const totalPrice = Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + toppingPrice;
    return totalPrice;
  }

  /**
   * Узнать калорийность
   * @returns {Number} - Калорийность в калориях
   *
   * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
   */
  calculateCalories() {
    const toppingCalories = this.toppings.reduce((arr, value) => {return arr + Hamburger.TOPPINGS[value].calories;}, 0);
    const totalCalories = Hamburger.SIZES[this.size].calories + Hamburger.STUFFINGS[this.stuffing].calories + toppingCalories;
    return totalCalories;
  }
}

/* Вот как может выглядеть использование этого класса */
// Маленький гамбургер с начинкой из сыра

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит? 
console.log("Price with sauce: ", hamburger.calculatePrice());

//Всего калорий
console.log("Calories with sauce: ", hamburger.calculateCalories());

// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
						     
// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1

/*
  🔔 Обратите внимание на такие моменты:
    	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается 
    		другой код, а класс живет в изоляции от мира
	
    	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор, 
		чтобы нельзя было создать объект, не указав их
	
    	✔️ необязательные (добавка) добавляем через методы
    
    	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто 
	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
	
    	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей. 
    
    	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки), 
      		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории 
		логично в тот момент, когда это потребуется, а не заранее.
*/