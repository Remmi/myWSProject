/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 10:40
 */

/**
 * Мне не нравится реализация
 * но таким было условие задачи
 */
(function () {
    function Summator() {

        this.sum = function(a, b) {
            return (a + b);
        }

        this.run = function() {
            alert(this.sum(+prompt("Введите a"), +prompt("Введите b")));
        }
    }

    var testObj = new Summator();
    testObj.run();
})();