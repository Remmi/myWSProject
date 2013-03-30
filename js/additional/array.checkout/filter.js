/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 30.03.13
 * Time: 10:45
 */

/**
 * Метод arr.filter(callback[, thisArg])
 * создаёт новый массив, в который войдут только те элементы
 * для которых вызов callback(item, i, arr) возвратит true
 */
(function () {
    var arr = [1, -1, 2, -2, 3];

    function isPositive(number) {
        return number > 0;
    }

    var positiveArr = arr.filter(isPositive);

    console.log(arr);
    console.log(positiveArr);
})();
