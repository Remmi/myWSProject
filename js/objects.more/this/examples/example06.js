/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 17:29
 */

/**
 * Скопируем метод из одного объекта в другой
 */
(function () {
    function sayHi() {
        // берём псевдо-массив arguments
        // и "одалживаем" для него метод из настоящего массива
        arguments.join = [].join;

        // вызываем новоиспечённый метод
        var argStr = arguments.join(':');

        // проверим результат работы
        return argStr;
    }

    /** ------ Together united ------- */

    console.log(sayHi(1, 2, 3)); // 1:2:3
})();

/**
 *  Внутреннее устройство функции join()
 *
 *  function join(separator) {
 *    if (!this.length) return '';
 *
 *    var str = this[0];
 *
 *    for (var i = 1; i<this.length; i++) {
 *      str += separator + this[i];
 *    }
 *
 *    return str;
 *  }
 */

/**
 * Прямое копирование не всегда уместно и, отчасти, опасно
 * Поэтому используем apply/call
 * При помощи call/apply можно взять метод одного объекта
 * (в том числе и встроенного)
 * и вызвать в контексте другого
 */
(function () {
    function sayHi() {
        // ссылка на функцию записана в переменную join
        var join = [].join;

        // вызываем join с this=arguments
        // этот вызов эквивалентен arguments.join(':')
        var argStr = join.call(arguments, ':');

        // чисто как в аптеке
        return argStr;
    }

    /** ------ Together united ------- */
    console.log(sayHi(4, 5, 6)); // 4:5:6
})();