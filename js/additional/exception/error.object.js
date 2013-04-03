/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 02.04.13
 * Time: 10:52
 */

(function () {
    // как можно было заметить, у блока catch
    // есть свой собственный аргумент
    // он называется объект ошибки или "объект исключения"
    // он содержит информацию о том, что произошло
    // и может быть разным, в зависимости от ошибки

    // как правило, аргумент catch(err)
    // встроенного типа Error и производных от него
    // имеет несколько свойств:
    // 1. name - тип ошибки.
    //    например, при обращении к несуществующей переменной
    //    равен "ReferenceError"
    // 2. message - текстовое сообщение о деталях ошибки
    // 3. stack - есть везде, кроме IE<9
    //    указывает, где именно произошла ошибка

    try {
        var a = 5;
        var res = a(1);
    }
    catch (err) {
        console.log("Название ошибки (name): "
                    + err.name                       // TypeError
                    + "\nСообщение: " + err.message  // number is not a function
                    + "\nСтэк: " + err.stack         // TypeError: number is not a function at file...
        );
    }

    try {
        var number = 9;
        var base = 100;
        var convertedNumber = number.toString(base);
    }
    catch (err) {
        console.log("Название ошибки (name): "
            + err.name                       // RangeError
            + "\nСообщение: " + err.message  // toString() radix argument must be between 2 and 36
            + "\nСтэк: " + err.stack         // RangeError: ... at file ...
        );
    }
})();
