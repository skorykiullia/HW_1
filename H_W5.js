// 1 zadanie

function sum() {

  let arg = 0;
  let res = 0;
  return function (val) {
    res = val + arg;
    arg = res;

    return console.log(res);

  };

}
let counter = sum();

counter(3); //3
counter(9); //12
counter(6); //18

// 2 zadanie

// Создать функцию которая будет возвращать массив в котором будут лежать все значения - аргументы переданные в данную функцию. Но если мы ничего не передадим в параметрах, то массив очистится. Запрещается использовать глобальные переменные как хранилище значений.

function mass() {

  let arr = [];

  return function (val) {

    arr[arr.length] = val;
    if (val == null) {
      arr.length = 0
    }


    return console.log(arr);

  };

}
let getUpdatedArr = mass();




// getUpdatedArr(3) // [3]
// getUpdatedArr(5) // [3, 5]
// getUpdatedArr({ name: 'Vasya' }) // [3, 5, {name: 'Vasya'}]
// getUpdatedArr() // []
// getUpdatedArr(4) // [4]

// 3 zadanie
// Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем когда ее вызывали последний раз и теперешним. Вызываем первый раз, то ретерним строку 'Enabled'. Запрещается использовать глобальные переменные как хранилище значений.

function timeInSec() {
  let res = 0;
  let time1 = 0;
  let time2 = 0;
  return function () {
    time1 = new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds();
    if ((time1 - time2) === time1) {
      time2 = time1;
      return console.log('Enabled')
    }
    else {
      res = time1 - time2;
      time2 = time1;
      return console.log(res);

    }

  };

}
let getTime = timeInSec();

// esli proverjay v consoli, to rabotaet pravilno.

// Запускаем первый раз
//getTime() // 'Enabled'
// Запускаем через 2 сек
//getTime() // 2
//Запускаем через 3 сек

//getTime() // 3
// Запускаем через 7 сек
//getTime() // 7
// Запускаем через 60 сек
//getTime() // 60
// Запускаем через 1 сек
//getTime() // 1


// 4 zadanie
// Создать таймер обратного отсчета, который будет в console выодить время в формате MM:SS. Где MM - количество минут, SS - количество секунд. При этом когда закончится время, нужно вывести в console строку "Timer End".
// const time = 60;

// const timer = time => {
//     ...Your code
// }

//Вариант если время минута или больше
//timer(120) // в аргументе передаем кол-во секунд
// 02:00
// 00:59
// 00:58

// 00:01
// Time End


//Вариант если время меньше минуты
//timer(59) // в аргументе передаем кол-во секунд
// 00:59
// 00:58
// 00:57

// 00:01

function timer(time) {
  return setInterval(tick, 1000);
  function tick() {
    if (time < 60 && time >= 10) { console.log('00:' + (time--)); }
    else if (time < 10 && time >= 0) { console.log('00:' + '0' + (time--)); }
    else if ((time >= 60) && ((`${Math.ceil((time % 60)) + 1}`) <= 10) && (`${(time - (time) % 60) / 60}`) < 10) { console.log('0' + `${Math.floor((time - (time) % 60) / 60)}` + ':' + '0' + `${(time-- % 60)}`) }
    else if ((time >= 60) && (`${(time - (time) % 60) / 60} `) < 10) { console.log('0' + `${Math.floor((time - (--time) % 60) / 60)}` + ':' + `${(time % 60) + 1} `) }
    else if (time >= 60 && (Math.floor(`${(time % 60)} `)) === 0) { console.log(`${Math.ceil((time - (--time) % 60) / 60)}` + ':' + '00') }
    else if (time >= 60 && (`${(time % 60)} `) < 10) { console.log(`${Math.floor((time - (--time) % 60) / 60)}` + ':' + '0' + `${(time % 60) + 1} `) }
    else if (time >= 60) { console.log(`${Math.floor((time - (--time) % 60) / 60)}` + ':' + `${(time % 60) + 1} `) }
    else if (time <= 0) {
      clearInterval(timer);
      console.log("Time End")
    }
  }
}

timer(98);
