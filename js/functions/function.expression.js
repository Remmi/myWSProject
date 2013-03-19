/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 18.03.13
 * Time: 14:09
 */

(function () {
    "use strict";

    // Function Expression сначала создаёт переменную sayHi
    // и только потом, при последовательном выполнении всех инструкций
    // она присвоит в sayHi функцию
    var sayHi = function(person) {
        var tmp;
        tmp = "Привет, " + person;
        return tmp;
    }

    // поэтому все вызовы FE-функции нужно делать после её объявления
    //console.log(sayHi);

    /*
     выведет "Привет, Рома"
     console.log(sayHi("Рома"));

     это ничего не выведет
     console.log(tmp);
     */

    // FE можно также хранить в массиве
    // и вызывать их оттуда
    var arr = [1, 2, function(a) { return (a + " ^ 2 = " + a*a) }, 3, 4];
    console.log(arr[2](arr[3]));

    // а ещё FE, в отличие от FD можно объявлять в блоке кода
    // например в if..else

    var age, sayHi;
    age = 21;
    if (age >= 18) {
        sayHi = function() {  return ('Вход разрешен');  }
    } else {
        sayHi = function() {  return ('Извините, вы слишком молоды');  }
    }

    console.log(sayHi()); // запустит ту функцию, которая присвоена в if

    // на месте можно вызывать только Function Expression
    // такое не пройдёт
    // если убрать !
    !function() {
        // wtf
    }();

    // и так не выйдет
    // если убрать +
    +function work() {
        // wtf #2!
    }();

    // если вызываем функцию на месте, то надо поставить скобки вокруг неё
    var result = (function(a,b) {
        return a*b;
    })(2,3);

    // иначе нихрена не будет понятно при поддержке кода
})();
