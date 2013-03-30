/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 30.03.13
 * Time: 10:24
 */

/**
 * знакомство с факерами
 * метод arr.forEach(callback[, thisArg])
 * вызывает функцию callback для каждого элемента массива
 * thisArg - передаёт контекст исполнения
 * функция вызывается с параметрами
 * callback(item, i, array)
 * item - очередной номер массива
 * i - его номер
 * arr - массив, который перебирается
 */
(function () {
    var arr = ['Яблоко', 'Апельсин'];

    function outputItem(item, i, arr) {
        console.log(i + ': ' + item + " (массив:" + arr + ")");
    }

    arr.forEach(outputItem);
})();
