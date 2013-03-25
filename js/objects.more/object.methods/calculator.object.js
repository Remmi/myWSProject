/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 11:44
 */

(function () {
    function Calculator() {
        /**
         * вызов calculate(str) принимает строку, например «1 + 2»,
         * с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции),
         * и возвращает результат.
         * Понимает плюс + и минус
         * @param str
         * @returns {number}
         */
        var operations = {
            "+": function (a, b) {
                return a + b;
            },
            "-": function (a, b) {
                return a - b;
            }
        };

        this.calculate = function(str) {
            var res = 0;

            var calcArgs = new Array();
            calcArgs = str.split(' ');

            if (operations[calcArgs[1]]) {
                res = operations[calcArgs[1]](+calcArgs[0], +calcArgs[2]);
            }
            else {
                res = NaN;
            }
            return res;
        }

        /**
         * учит калькулятор новой операции.
         * Он получает имя операции name и функцию
         * от двух аргументов func(a,b), которая должна её реализовывать.
         * @param name
         * @param func
         */
        this.addMethod = function(name, func) {
            operations[name] = func;
        }
    }

    /**
     * Юнит-тест, юнит-тест, юнит-юнит-тест
     * Счастье к нам приходит, всегда с нью объектом
     * @type {Calculator}
     */
    var objClc = new Calculator();

    objClc.addMethod("*", function(a, b) { return a * b; });
    objClc.addMethod("/", function(a, b) { return a / b; });
    objClc.addMethod("**", function(a, b) { return Math.pow(a, b); });

    console.log("3 + 7 = " + objClc.calculate("3 + 7"));
    console.log("3 - 7 = " + objClc.calculate("3 - 7"));
    console.log(objClc.calculate("1.3 * -5")); // -6.5
    console.log(objClc.calculate("1 / 0"));    // Infinity
    console.log(objClc.calculate("2 ** 3"));   // 8
    console.log(objClc.calculate("2 -- 5"));   // NaN
    console.log(objClc.calculate("a + b"));   // NaN

})();
