/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 18:18
 */

/**
 * Сделаем из arguments настоящий Array
 * с блэкджэком и шлюхами
 */
(function () {
    function sayHi() {
        // slice копирует все элементы из this
        var args = [].slice.call(arguments);
        return args;
    }
    // такой вызов возможен потому,
    // что slice использует только нумерованные свойства и length
    // всё это есть в arguments
    console.log(sayHi(1, 3)); // 1,3
})();