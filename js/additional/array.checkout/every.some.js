/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 31.03.13
 * Time: 0:53
 */

(function () {
    var arr = [1, -1, 2, -2, 3];

    function isPositive(number) {
        return number > 0;
    }

    /**
     * Метод arr.every(callback[, thisArg])
     * возвращает true, если вызов callback
     * вернёт true для всех элементов arr
     */

    // вернёт false - не все положительные
    console.log(arr.every(isPositive));

    /**
     * Метод arr.some(callback[, thisArg])
     * возвращает true, если вызов callback
     * вернёт true хотя бы для одного элемента arr
     */

    // вернёт true - есть положительные
    console.log(arr.some(isPositive));
})();
