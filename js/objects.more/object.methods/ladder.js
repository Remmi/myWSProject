/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 25.03.13
 * Time: 8:23
 */

(function () {
    "use strict";
    var ladder;
    ladder = {
        step: 0,
        up: function () {  // вверх по лестнице
            this.step += 1;
            return this;
        },
        down: function () {  // вниз по лестнице
            this.step -= 1;
            return this;
        },
        showStep: function () { // вывести текущую ступеньку
            console.log(this.step);
            return this;
        }
    };

    ladder.up().up().down().up().down().showStep().up().up().showStep(); // 1; 3
})();
