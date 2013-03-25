/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 23.03.13
 * Time: 20:28
 */

(function () {
    "use strict";
    var user = {
        // свойство 'name'
        name: 'Василий',

        // метод 'sayHi'
        sayHi: function () {
            // this - обращение к свойствам внутри объекта
            // в контексте которого вызван метод
            console.log(this.name);
        }
    }

    user.sayHi();
})();

// можно передавать объект целиком
(function () {
    "use strict";
    var user = {
        name: 'Василий',

        sayHi: function () {
            showName(this); // передать текущий объект в showName
        }
    };

    // вызывает showName с параметром obj - объектом
    function showName(obj) {
        console.log(obj.name);
    }

    user.sayHi();
})();

(function () {
    "use strict";
    /**
     * Что-то типа класса Animal
     * он создаётся с помощью соответствующей функции с параметром name
     * @param name
     * @constructor
     */
    function Animal(name) {
        this.name = name;
        this.canWalk = true;
    }

    var animal, anotherBigAnimal, anotherStupidAnimal;
    animal = new Animal("Ёжик");

    console.log(animal); // экземпляр будет называться Animal

    /**
     * Кто круче: this.name или return { name: value }?
     * @returns {{name: string}}
     * @constructor
     */
    function BigAnimal() {
        this.name = 'Мышь';
        return {
            name: 'Годзилла'
        };
    }

    anotherBigAnimal = new BigAnimal(); // победит "Годзилла"
    console.log(anotherBigAnimal); // к слову, экземпляр при таком создании будет Object

    /**
     * Если возвращать не объект, а строку
     * То будет побеждать this.name = value
     */

    function StupidAnimal(name)
    {
        this.name = name;
        return 'Вася';
    }

    anotherStupidAnimal = new StupidAnimal("Муравьед"); // а здесь экземпляр будет anotherStupidAnimal
    console.log(anotherStupidAnimal);
})();

(function () {
    /**
     * Проверим на возможность существования следующих функций А и В
     * function A() { ... }
     * function B() { ... }
     * var a = new A;
     * var b = new B;
     * alert( a == b ); // true
     */

    // такое возможно, если обе функции возвращают один объект
    // при этом объект находится вне функций
    // поскольку у объектов сравниваются ссылки, а не их значения
    // если просто возвращать у обеих вариантов {name: value}
    // то сравнение даст false

    // вот такой объект
    tmpObject = {name: 'Бобик'};

    // две функции, которые его возвращают
    function A() { return tmpObject; }
    function B() { return tmpObject; }

    var a, b, tmpObject;
    a = new A;
    b = new B;
    console.log(a);
    console.log(b);

    // если мы изменим параметр у a
    // то у b он тоже изменится
    a.name = 'Тузик';
    console.log(a);
    console.log(b);

    console.log(a == b); // true
})();

/**
 * Проверка создания методов в конструкторе
 */
(function () {

    /**
     * Создаёт "класс" User
     * со свойством name, в которое запишется параметр name
     * и методом sayHi()
     * @param name
     * @constructor
     */
    function User(name) {
        this.name = name;

        this.sayHi = function() {
            console.log("Моё имя: " + this.name);
        };
    }

    var ivan = new User("Иван");

    /* Объект ivan имеет вид:
     {
     name: "Иван",
     sayHi: функция, обращение к имени идёт через this.name
     }
     */

    ivan.sayHi(); // Моё имя: Иван


})();

/**
 * Попробуем поиграть с внутренними значениями объектов
 * к которым нет прямого доступа извне
 */
(function () {
    function User(name) {
        // name будет находиться в замыкании
        this.upperCaseName = function() {
            name = name.toUpperCase(); // <-- изменяет name из User
        };

        this.say = function(phrase) {
            console.log(name + ' сказал: ' + phrase); // <-- получает name из User
        };

    }

    var user = new User('Вася');

    user.upperCaseName();

    user.say("Да здравствует ООП!") // ВАСЯ сказал: Да здравствует ООП!

})();




