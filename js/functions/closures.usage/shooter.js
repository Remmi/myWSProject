/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 22.03.13
 * Time: 13:43
 */

/**
 * Функция сработает с ошибкой
 * Вывод будет 10, 10, 10, .. , 10
 */
(function () {
    "use strict";
    console.log("Сработает с ошибкой: ")
    function makeArmy() {
        var shooters, i, shooter;
        shooters = [];
        for (i = 0; i < 10; i += 1) {
            shooter = function () { // функция-стрелок
                console.log(i); // выводит свой номер
            };
            shooters.push(shooter);
        }
        return shooters;
    }
    var army = makeArmy();
    army[0](); // стрелок выводит 10, а должен 0
    army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
})();

console.log("\n");

/**
 * Первый способ всё исправить
 * Добавим свойство для функции shooter
 * shooter.num = i - присваивает текущее i в num
 * Назовём NFE "me" и будем вызывать изнутри как "me.num"
 */
(function () {
    "use strict";
    console.log("Первый способ: ")
    function makeArmy() {
        var shooters, i, shooter;
        shooters = [];
        for (i = 0; i < 10; i += 1) {
            shooter = function me() { // функция-стрелок
                return me.num; // выводит свой номер
            };
            // если убрать me и обращаться через shooter
            // то работать не будет, поскольку переменная будет взята из внешнего объекта
            // а если вызывать через NFE "me"
            // то имя жёстко привязывается к конкретной функции
            shooter.num = i;
            shooters.push(shooter);
        }

        return shooters;
    }
    var army = makeArmy();
    console.log(army[0]()); // 0
    console.log(army[5]()); // 5
})();

console.log("\n");

/**
 * Второй способ - сделать дополнительную функцию
 * Чтобы поймать текущее значение i
 */
(function () {
    "use strict";
    console.log("Второй способ: ")
    function makeArmy() {
        var shooters, i, shooter;
        shooters = [];
        for (i = 0; i < 10; i += 1) {
            // сделаем shooter функцией, вызываемой на месте
            // с параметром x, в который после объявления мы запишем текущее i
            // а сама функция вернёт другую функцию
            // которая выведет переданный параметр x
            shooter = (function (x) {
                return function () {
                    console.log(x);
                };
            })(i);
            shooters.push(shooter);
        }

        return shooters;
    }

    var army = makeArmy();

    army[0](); // 0
    army[6](); // 6

})();

console.log("\n");

/**
 * Третий способ
 * Обернуть блок внутри цикла во временную функцию с параметром x
 * И передавать туда текущее значение счётчика
 * Тогда ссылка будет на уникальное значение
 */
(function () {
    "use strict";
    console.log("Третий способ: ");
    function makeArmy() {
        var shooters, i;
        shooters = [];
        for (i = 0; i < 10; i += 1) {
            // та самая временная функция с вызовом на месте
            (function (i) {
                var shooter = function () {
                    return i;
                };
                shooters.push(shooter);
            })(i);
        }

        return shooters;
    }

    var army = makeArmy();

    console.log(army[5]()); // 5
    console.log(army[9]()); // 9

})();

