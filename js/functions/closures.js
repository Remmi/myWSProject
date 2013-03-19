/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 18.03.13
 * Time: 18:19
 */

/**
 * Замыкание функции
 * Это текущее пространство имён и все пространства из внешнего уровня
 * Имея следующий уровень вложенности f1() -> f2() -> f3()
 * Можно сказать, что f1 имеет доступ к себе и window
 * f2 - к себе, f1 и window
 * f3 - к себе, f2, f1 и window
 */

//function sayHi(name) {
//    "use strict";
//    // Lexical Environment (Local) = { name: 'Вася', phrase: undefined }
//    var phrase;
//    function makePhrase(name)
//    {
//        var strRes;
//        strRes = "Привет, " + name;
//        return strRes;
//    }
//    phrase = makePhrase(name);
//    // Lexical Environment (Local) = { name: 'Вася', phrase: 'Привет, Вася' };
//    alert(phrase);
//}
//
//sayHi('Вася');

function sayHi(person) {
    "use strict";
    return function () { // (*)
        var message = "Привет, " + person; // (**)
        alert(message);
    };
}

var sayHiRoman;
sayHiRoman = sayHi("Рома");
sayHiRoman();
