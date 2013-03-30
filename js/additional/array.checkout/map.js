/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 30.03.13
 * Time: 23:17
 */

/**
 * Метод arr.map(callback[, thisArg])
 * создаёт новый массив, который будет состоять
 * из результатов вызова callback(item, i, arr)
 * для каждого элемента arr
 */
(function () {
    var arr = [1, 2, 3, 4];

    // 1, 2, 3, 4
    console.log(arr);

    function square(number) {
        return number * number;
    }

    var squaredArr = arr.map(square);

    // 1, 4, 9, 16
    console.log(squaredArr);

})();
