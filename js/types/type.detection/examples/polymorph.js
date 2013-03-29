/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 27.03.13
 * Time: 16:16
 */

/**
 * Используем проверку типов для полиморфизма
 */
(function () {
    function sayHi(who) {
        if (!arguments.length) {
            console.log('Привет');
            return;
        }

        if ({}.toString.call(who) == "[object Array]") {
            for (var i = 0; i < who.length; i++) {
                sayHi(who[i]);
            }
            return;
        }

        console.log('Привет, ' + who);
    }

    sayHi();
    sayHi("Вася");
    sayHi(["Саша", "Гавняша", ["Гомик", "Сергей"]]);
})();
