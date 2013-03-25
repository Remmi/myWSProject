/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 23.03.13
 * Time: 13:19
 */

/**
 * Посмотрим как функция будет работать с разным количеством аргументов
 */

function go(a, b) {
    "use strict";
    alert("a = " + a + "; b = " + b);
}

// вызовем с одним аргументом
go(1);

// с двумя
go(1, 2);

// с тремя
go(1, 2, 3);

alert("log()");

function log(a)
{
    "use strict";
    alert("a = " + a);
}

function log(a, b, c)
{
    "use strict";
    alert("a = " + a + "; b = " + b + "; c = " + c);
}

// проверка log
// вызовется только второй вариант функции
// он перезаписал первый
log(1);
log(1, 2, 3);

function sayHi()
{
    "use strict";
    var i;
    for (i = 0; i < arguments.length; i += 1)
    {
        alert("Привет, " + arguments[i]);
    }
}

sayHi("Винни", "Пятачок");

// если не использовать "use strict"
// то псевдо-массив arguments и параметры функции
// ссылаются на одни и те же значения

(function () {
    function f(x) {
        arguments[0] = 5; // меняет переменную x
        alert(x); // 5
    }
    f(1);
})();

(function ()
{
    function f(x) {
        x = 5;
        alert(arguments[0]); // 5, обновленный x
    }
    f(1);
})();

(function () {
    "use strict";
    // в строгом режиме arguments и параметры находятся отдельно друг от друга

    function f(x) {
        "use strict"; // для браузеров с поддержкой строгого режима
        arguments[0] = 5;
        alert(x); // не 5, а 1! Переменная "отвязана" от arguments
    }
    f(1);
})();

(function () {
    function f() {
        alert( arguments.callee === f); // true
    }
    f();
})();




