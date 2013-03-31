/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 31.03.13
 * Time: 10:07
 */

/**
 * eval(code) - позволяет выполнить код
 * переданный в виде строки
 * он будет выполнен в текущей области видимости
 */
(function () {
    var a = 1;
    (function () {
        var a = 2;
        // выведет 2
        var str = 'console.log(a)';
        eval(str);
    })();

    // а ещё eval может вернуть результат
    // здесь будет возвращено 4
    console.log(eval('2 * 2'));
})();
