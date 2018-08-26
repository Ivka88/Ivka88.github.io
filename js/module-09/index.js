'use strict';

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/





const clockface = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');


updateClockface(0);
listLaps(0);

class Stopwatch {
  constructor({
    onTick, 
    listLap, 
  }) {
    this.startTime = 0;
    this.deltaTime = 0;
    this.active = false;
    this.timerId = null;
    this.onTick = onTick;
    this.arrLaps = [];
    this.listLap = listLap;
  }

  start() {
  if(this.active) return;

  this.active = true;
  this.startTime = Date.now() - this.deltaTime;

  this.timerId = setInterval(() => {
    this.deltaTime = Date.now() - this.startTime;
    this.onTick(this.deltaTime);
  }, 100);
  
}

stop () {
  clearInterval(this.timerId);
  this.timerId = null;
  this.active = false; 
}

reset () {
  this.stop();
  this.startTime = 0;
  this.deltaTime = 0;
  this.onTick(this.deltaTime);
}

lap () {
  this.listLap(this.deltaTime);
  this.arrLaps = [];
  this.arrLaps.push(this.deltaTime);
  }
};

const watch = new Stopwatch({onTick: updateClockface, listLap: listLaps});

function updateClockface(time) {
  clockface.textContent = formatTime(time);
}

function formatTime(time) {
  const date = new Date(time);
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let ms = Number.parseInt(date.getMilliseconds()/100);
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;
  return `${min}:${sec}:${ms}`;
}

function listLaps(arr) {
  const arrItems = [];
  for (let i = 0; i < arr.length; i++) {
    const item = document.createElement('li');
    item.textContent = formatTime(arr[i])
    arrItems.push(item)
  };
  
  const laps = document.querySelector('.js-laps');
  laps.append(...arrItems); 
} 


startBtn.addEventListener('click', () => {
  if(!watch.active) {
    watch.start();
    startBtn.textContent = 'Pause';
    return;
  }
  watch.stop();
  startBtn.textContent = 'Continue';
});


resetBtn.addEventListener('click', () => {
  watch.reset();
  startBtn.textContent = 'Start';
});


lapBtn.addEventListener('click', () => {
  if(!watch.active) {
    watch.start();
    lapBtn.textContent = 'Lap';
    return;
  } 
  watch.stop();
    watch.lap();
  });








