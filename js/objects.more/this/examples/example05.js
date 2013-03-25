/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 15:10
 */

/**
 * Поработаем с func.apply()
 */
(function () {
    // отличается от func.call только способом передачи параметров
    // func.call(context, arg1, arg2, ...)
    // func.apply(context, [arg1, arg2, ...]
    // это позволит нам формировать массив с параметрами на лету
    var user = {
        firstName: "Василий",
        surname: "Петров"
    };

    function getName(a, b) {
        return ( this[a] + ' ' + this[b] );
    }

    var args = [];
    args.push('firstName');
    args.push('surname');

    console.log(getName.apply(user, args)); // "Василий Петров"
    console.log(getName.apply(user, ['firstName', 'surname'])); // "Василий Петров"

})();

(function () {
    // При указании первого аргумента null или undefined
    // в call/apply, функция получает this = window:
    function f1() { return (this) }
    console.log(f1.call(null)); // window

    // Если функция работает в строгом режиме, то this передаётся «как есть»:
    function f2() {
        "use strict";
        return (this); // null, "как есть"
    }
    console.log(f2.call(null));

})();
