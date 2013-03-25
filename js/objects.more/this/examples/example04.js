/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 14:58
 */

/**
 * Функцию можно вызвать в определённом контексте
 * через метод call: func.call(context, arg1, arg2, ...)
 */

(function () {
    var user = {
        firstName: "Василий",
        lastName: "Петров"
    };

    function showName() {
        return ( this.firstName + ' ' + this.lastName );
    }

    // более универсальная функция
    // выводит значения по названию ключей
    function getName(a, b) {
        return ( this[a] + ' ' + this[b] );
    }

    /** ------ Together united ------- */

    console.log(showName.call(user));  // "Василий Петров"
    console.log(getName.call(user, 'lastName', 'firstName'));  // "Петров Василий"

})();
