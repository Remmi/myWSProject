/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 18.03.13
 * Time: 12:33
 */

/**
 * Важное замечание
 * Функции, созданные через FD, создаются до выполнения кода
 */

// 1. объявляем функцию func методом FD
function func(int) {
    "use strict";
    return int * int;
}

// 2. Выводим код функции
console.log(func);

// 3. Выводим результат func(2)
console.log(func(2));

// 4. присваиваем функцию в g
var g;
g = func;

// 5. выводим код функции в g
console.log(g);
// 6. выводим 3*3
console.log(g(3));

// 7. обнуляем func
func = null;

// 8. функция продолжает существовать в g
console.log(g(4));

// 9. обнуляем g
g = null;

// 10. выведет сообщение об ошибке
console.log(g(5));

(function () {
    // FD создаются независимо от блоков, в которых они находятся
    // независимо от значения age
    // сначала будет создан sayHi с "прошу вас"
    // затем он будет перезаписан с "до 18 нельзя"
    var age;
    age = 20;
    if (age >= 18) {
        function sayHi() {  alert('Прошу вас!');  }
    } else {
        function sayHi() {  alert('До 18 нельзя'); }
    }
}
)();

