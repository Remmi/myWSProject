/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 31.03.13
 * Time: 11:29
 */

/**
 * Для eval существует отличная альтернатива
 * new Function()
 */
(function () {
    // вызов new Function(a, b, '..тело..')
    // создаёт новую функцию с указанным телом
    // и аргументами a и b
    // доступа к текущему замыканию у такой функции не будет
    // но можно передать локальные переменные и получить результат

    var a = 2;

    var f = new Function ('x', 'console.log(x*x)');

    f(a);

})();

(function () {
    // так как областью видимости функции,
    // созданной через new Function
    // является глобальный объект
    // она даже технически не сможет обратиться к a
    var a = 2;
    var f = new Function('', 'console.log(a)');
    f();
})();