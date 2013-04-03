/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 31.03.13
 * Time: 10:24
 */

/**
 * Код выполняется в текущей области видимости
 */
(function () {
    eval("var a = 5");
    // выведет 5, новая переменная определена
    console.log("a = " + a);

    var b = 0;
    // текущее значение переопределено
    eval("b = 5");
    console.log("b = " + b);

    var a1 = 555;
    (function () {
        "use strict";
        // новые переменные не появятся в строгом режиме
        eval("var a1 = 5");
        // a1 is not defined
        // или будет взята из внешней области видимости
        console.log("a1 = " + a1);
        // а существующие переменные можно переопределить
        var a2 = 66;
        eval("a2 = 3");
        console.log("a2 = " + a2);
    })();
})();
