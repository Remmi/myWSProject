/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 02.04.13
 * Time: 17:08
 */

(function () {
    // генерация ошибки throw
    // синтаксис: throw <объект ошибки>
    // объектом может быть что угодно
    // например - число:
    try {
        throw 123;
    }
    catch (e) {
        alert(e); // 123
    }

    // можно использовать для этих целей
    // встроенный объект Error
    try {
        throw new Error("Упс, ошибка");
    }
    catch (e) {
        console.log(e.message);
        console.log(e.stack);
    }

    // а можно и свой объект,
    // в том числе и с дополнительной информацией
    function BadValueError(message) {
        this.name = "BadValue";
        this.message = message;
    }
    function checkValidAge(age) {
        if (age < 18) {
            throw new BadValueError("Возраст не подходит");
        }
    }

    function checkRequired(value) {
        if (value == '') {
            throw new BadValueError("Отсутствует значение");
        }
    }

    var value = ageInput.value;
    try {
        checkRequired(value);
        checkInteger(value);
        checkValidAge(value);
        /* ввод успешен */
    } catch(e) {
        /* обработать ошибку */
    }

    // при таком подходе try..catch поймает любую ошибку
})();
