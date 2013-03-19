/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 18.03.13
 * Time: 15:05
 */

(function () {
    "use strict";
    // на самом деле имя функции в FD - имя переменной, в которой хранится функция
    // поэтому можно перемещать функцию по переменным
    // она сохранится под другим "именем"

//    function f() {
//        return "I am f";
//    }
//    var g;
//    g = f;
//    f = 0;
//    console.log(g());
//    console.log(g);

    // проверим гипотезу
//    var f = function f() {
//        return "kill me please";
//    }
//    f();
//    var g = f;
    // f = 0;
    // console.log(g());
    // console.log(g);

    // function f() {} равнозначно var f = function f() {}
    // разница в том, что первый вариант присвоится сразу
    // а второй будет присвоен после последовательного выполнения инструкций



})();
