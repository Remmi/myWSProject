/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 02.04.13
 * Time: 17:57
 */

(function () {
    // брошенное исключение выпадает
    // из всех циклов, функций и т.п.
    // это особое, уникальное свойство исключений
    // оно означает, что в случае вложенных вызовов
    // не важно, где было исключение -
    // оно будет поймано ближайшим внешним try..catch

    function checkAll(value) {
        checkRequired(value);
        checkInteger(value);
        checkValidAge(value);
    }

    try {
        checkAll(value);
        alert('Да, вы нам подходите!');
    }
    catch (e) {
        if (e.name == "BadValue") {
            // ок, я знаю, что делать с этой ошибкой
            alert("Ошибка: " + e.message);
        }
        else {
            // ошибка неизвестна, пробросить её дальше
            throw e;
        }
    }

    // если e неизвестна, то пробросим её во внешний блок try..catch
    // а если такого нет, то ошибка просто отобразится в консоли
})();
