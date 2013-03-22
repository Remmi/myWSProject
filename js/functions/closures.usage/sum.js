/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 22.03.13
 * Time: 13:41
 */

/**
 * Складывает два числа a и b вызовом sum(a)(b)
 * @param a
 * @returns {Function}
 */
function sum(a)
{
    "use strict";
    var res;
    res = 0;
    function add(b)
    {
        res = a + b;
        return res;
    }
    return add;
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
