/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 18:45
 */

/**
 * Напишите функцию f, которая будет обёрткой вокруг другой функции g.
 * Функция f обрабатывает первый аргумент сама,
 * а остальные аргументы передаёт в функцию g, сколько бы их ни было.
 */
(function () {
    function f() {
        var args = [].slice.call(arguments);
        console.log(args[0]);
        args = args.slice(1);
        return g.apply(this, args);
    }

    function g(a, b, c) {
        return( (a || 0) + (b || 0) + (c || 0) );
    }

    console.log(f("тест", 1, 2));       // f выведет "тест", дальше g посчитает сумму "3"
    console.log(f("тест2", 1, 2, 3));   // f выведет "тест2", дальше g посчитает сумму "6"

})();