/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 23.03.13
 * Time: 20:54
 */

/**
 * Создайте объект calculator с тремя методами:
 * readValues() запрашивает prompt два значения и сохраняет их как свойства объекта
 * sum() возвращает сумму двух значений
 * mul() возвращает произведение двух значений
 */
(function () {
    "use strict";
    var calculator;
    calculator = {
        readValues: function () {
            // важно поставить плюсы (приведение к числу)
            // иначе на сложении получим строки
            this.a = +prompt("Введите параметр a: ", 0);
            this.b = +prompt("Введите параметр b: ", 0);
        },
        sum: function () {
            return this.a + this.b;
        },
        mul: function () {
            return this.a * this.b;
        }
    }

    // проверка в действии
    calculator.readValues();
    console.log(calculator.sum());
    console.log(calculator.mul());
})();
