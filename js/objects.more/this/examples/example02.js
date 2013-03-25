/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 14:42
 */

/**
 * Функция вызывается в контексте объекта
 * к которому была присвоена
 */
(function () {
    var user = { firstName: "Вася" };
    var admin = { firstName: "Админ" };

    function func() {
        return ( this.firstName );
    }

    /** ------ Together united ------- */

    user.a = func;  // присвоим одну функцию в свойства
    admin.b = func; // двух разных объектов user и admin

    console.log(user.a());     // Вася
    console.log(admin['b']()); // Админ (не важно, доступ через точку или квадратные скобки)
})();
