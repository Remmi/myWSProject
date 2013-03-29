/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 27.03.13
 * Time: 15:48
 */

/**
 * Проверка типа для пользовательских объектов
 */
(function () {
    function Animal(name) {
        this.name = name;
    }

    var animal = new Animal("Винни-Пух");
    // проверка на то, что экземпляр animal
    // принадлежит к семейству Animal
    console.log(animal instanceof Animal); // вернёт true

    // работает для встроенных объектов
    var d = new Date();
    console.log(d instanceof Date); // true

    function f() {}
    console.log(f instanceof Function); // true

    // instanceof только проверяет, но ничего не возвращает
    // но обычно это и не требуется

    // надёжнее использовать [[Class]]
    // instanceof подведёт, если объект создан в другом окне или фрэйме
})();
