/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 31.03.13
 * Time: 10:36
 */

var egA = 1;

(function () {
    // хотя технически код из eval
    // имеет доступ к локальным переменным
    // но это считается признаком плохого тона

    // если мы исполняем динамический (загружаемый с сервера) код
    // то пусть он будет сам по себе, со своими переменными
    // чтобы это не привело к конфликту с текущими именами
    var egA = 2;

    // выведет 1 везде, кроме IE<9
    window.eval('console.log("egA = " + egA)');
})();

// кроссбраузерный способ

function globalEval(code) { // объединим два способа в одну функцию
    window.execScript ? execScript(code) : window.eval(code);
}

var a = 1;

(function() {

    var a = 2;

    globalEval(' alert(a) '); // 1, во всех браузерах

})();

