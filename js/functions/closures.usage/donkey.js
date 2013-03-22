/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 22.03.13
 * Time: 13:42
 */

/**
 * Небольшой ослик
 * Который может здороваться $.sayHi()
 * И говорить $.yell() "И-а"
 * @returns {{sayHi: Function, yell: Function}}
 */
var makeDonkey = function () {
    "use strict";
    var name;
    name = "Ослик Иа";

    return {
        sayHi: function() {
            alert(name);
        },
        yell: function() {
            alert('И-а, и-а!');
        }
    };
}

// 1. доступ к переменной name сохранится
var donkey = makeDonkey();
donkey.sayHi();

// 2. Если удалить ссылку на name
delete(donkey.sayHi);
// то name останется в памяти
// поскольку yell ссылается на LexicalEnvironment в makeDonkey
// но доступ к ней получить будет нельзя

// 3. А если обнулить обе функции
donkey.sayHi = donkey.yell = null;
// то переменная name исчезнет из памяти вместе со всем замыканием и его LexicalEnvironment

