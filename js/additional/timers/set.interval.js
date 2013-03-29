/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 27.03.13
 * Time: 22:03
 */

/**
 * Следующий гость нашей программы setInterval(func, delay)
 * func  - функция, которая будет выполняться
 * delay - задержка в миллисекундах
 */
(function () {
    var i = 1;
    /**
     * Тут короче такая маза
     * Из кода, вызвать clearInterval можно только
     * если он находится внутри функции в setInterval
     * А так только привязкой события к какому-нибудь элементу страницы
     * @type {number}
     */
    var timerId = setInterval(function () {
        console.log(i);
        i++;
        if (i > 20) {
            clearInterval(timerId);
        }
    }, 100);
})();