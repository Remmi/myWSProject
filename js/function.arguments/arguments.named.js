/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 23.03.13
 * Time: 15:12
 */

function f(a) {
    "use strict";
    a = a || 100;
    alert(a);
}
f(5);   // 5
f();    // 100
f(0);   // 100
f('')   // 100
