/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 27.03.13
 * Time: 10:32
 */

/**
 * Поигрались с типами
 */
(function () {
    var a = 1;
    function a()
    {
        "use strict";
        return a;
    }
    console.log(new Date(0) - 0);      // 0 - дата в численном формате нуль минус нуль. даёт нуль
    console.log(new Array(1)[0] + ""); // undefined - new Array(1) даёт массив длины 1 без элементов. поэтому undefined + "" = undef
    console.log(({})[0] );              // undefined (серый) -
    console.log([1] + 1);              // 11 - массив преобразуется в строку "1". "1"+"1" = "11"
    console.log([1,2] + [3,4]);        // 1,23,4 - массивы приводятся к строкам "1,2"+"3,4" = "1,23,4"
    console.log([] + null + 1);        // null1
    console.log([[0]][0][0]);          // 0
    console.log(({} + {}));            // [object Object][object Object]
})();
