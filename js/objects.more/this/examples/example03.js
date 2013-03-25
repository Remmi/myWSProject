/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 14:50
 */

(function () {
    function func1() {
        return (this); // выведет [object Window] или [object global]
    }

    function func2() {
        "use strict";
        return (this); // выведет undefined (кроме IE<10)
    }

    /** ------ Together united ------- */

    console.log(func1()); // [object Window] или [object global]
    console.log(func2()); // выведет undefined (кроме IE<10)
})();
