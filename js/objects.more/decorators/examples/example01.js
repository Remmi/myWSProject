/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 26.03.13
 * Time: 11:40
 */

/**
 * Приём "Декоратор"
 * меняет или расширяет поведение существуюших функций
 */
(function () {
    function sum(a, b) {
        return a + b;
    }

    // передаём в параметре функцию f
    function doublingDecorator(f) {
        // возвращаем функцию
        return function() {
            // она будет возвращать удвоенный результат функции,
            // переданной в параметре
            return 2 * f.apply(this, arguments);
        }
    }

    // передаём в dD функцию sum
    // на выходе будем получать удвоенный результат первоначальной функции sum
    sum = doublingDecorator(sum);

    console.log(sum(1, 2)); // 1+2 = 3; 3*2 = 6;
    console.log(sum(2, 3)); // 2+3 = 5; 5*2 = 10;
})();
