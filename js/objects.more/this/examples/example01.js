/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 14:34
 */

/**
 * Вызов функции с this в контексте объекта
 */
(function () {
    var user = {
        firstName: "Вася"
    };

    function func() {
        return this.firstName;
    }

    /** ------ Together united ------- */

    user.sayHi = func;          // this = user;
    console.log(user.sayHi());  // 'Вася'

})();
