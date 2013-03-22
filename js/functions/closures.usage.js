/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 19.03.13
 * Time: 11:11
 */

// у нас есть функция-счётчик с замыканием
(function () {
    "use strict";
    function makeCounter() {
        var currentCount = 0;
        return function () {
            currentCount += 1;
            return currentCount;
        };
    }
    var counter, counter2;
    //
    // создаём экземпляр для счётчика makeCounter()
    counter = makeCounter();
    //
    // каждый вызов увеличивает счётчик
    counter();        // counter = 1
    counter();        // counter = 2
    alert(counter()); // counter = 3
    //
    // мы можем создать ещё один экземпляр для makeCounter()
    counter2 = makeCounter();
    //
    // он будет работать независимо от первого экземпляра
    counter2();       // counter2 = 1
})();

// немного улучшим нашу функцию
(function () {
    "use strict";
    function makeCounter() {
        var currentCount = 0;
        return function (newCount) {
            if (newCount !== undefined) { // есть аргумент?
                currentCount = +newCount; // сделаем его новым значением счётчика
                // вернём текущее значение, счётчик всегда возвращает его (это удобно)
                return currentCount;
            }
            currentCount += 1;
            return currentCount;
        };
    }
    var counter = makeCounter();
    counter();        // counter = 1
    counter(12);      // counter = 12
    counter();        // counter = 13
    alert(counter);   // выведет содержание функции из return'а
    alert(counter()); // выведет counter = 14
})();

// а ещё лучше сделаем её объектом с методами
(function () {
    "use strict";
    function makeCounter() {
        // счётчик внутри замыкания
        var currentCount = 0;
        // возвращаем как объект
        // с методами:
        //  $.getNext() - увеличивает значение счётчика на 1 и возврашает значение
        // $.set(value) - устанавливает значение счётчика равным value
        //    $.reset() - сбрасывает значение счётчика в ноль
        return {
            getNext: function () {
                currentCount += 1;
                return currentCount;
            },
            set: function (value) {
                currentCount = value;
            },
            reset: function () {
                currentCount = 0;
            }
        };
    }
    var counter = makeCounter();
    counter.getNext(); // 1
    counter.getNext(); // 2
    counter.reset();
    counter.getNext(); // 1
})();

// открытие года
// функция может быть объектом
// и иметь свои внутренние свойства и методы
(function () {
    "use strict";
    // делаем counter - объекто-функцию
    // counter() - увеличивает счётчик на 1
    // counter.set(value) - устанавливает значение в value
    // counter.reset() - обнуляет счётчик
    function makeCounter() {
        var currentCount = 0;
        // возвращаемся к функции
        function counter() {
            currentCount += 1;
            return currentCount;
        }
        // ...и добавляем ей методы!
        counter.set = function (value) {
            currentCount = value;
        };
        counter.reset = function() {
            currentCount = 0;
        };
        return counter;
    }

    var counter = makeCounter();
    counter(); // 1
    counter(); // 2
    counter.reset();
    counter(); // 1

    var counter2 = makeCounter();
    alert(counter2());
    alert(counter2());
})();

var MyLibrary = (function() {

    function helper() { }

    return {
        createMenu: function() {
            helper();
        },
        createDialog: function() { }
    };

})();

// использование
MyLibrary.createMenu();
