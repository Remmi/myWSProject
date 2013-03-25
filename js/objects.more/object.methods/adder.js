/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 11:09
 */

(function () {
    function Adder(startingValue) {
        this.value = startingValue;

        this.addInput = function () {
            this.value += +prompt("Введите число: ", 0);
        }

        this.showValue = function () {
            console.log(this.value);
        }
    }

    var newAdder = new Adder(1); // this.value = 1
    newAdder.addInput();         //
    newAdder.showValue();        // this.value += user.value[1]
    newAdder.addInput();         //
    newAdder.showValue();        // this.value += user.value[2]
})();