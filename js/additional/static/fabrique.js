/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 30.03.13
 * Time: 0:40
 */

/**
 * Иногда у объектов есть функции из коробки
 * Они называются фабричными методами
 * Служат альтернативой конструктору с обработкой разных данных
 * Фабричный метод - статический метод для создания новых объектов
 */
(function () {
    // fromCharCode - создаёт строку с символом
    // код которого передаётся в параметре
    var str = String.fromCharCode(65);
    // выведет 'A'
    console.log(str);

    /**
     * Давайте чё-то посложнее ебанём
     * Допустим был у нас User
     * С двумя различными параметрами
     * Пустой (анонимный) и через объект {name: value, age: value}
     * Мы можем обрабатывать переданные параметры разными ветками (полиморфизм)
     * Или же попробовать фабричные методы
     */

    function User() {
        this.sayHi = function () {console.log("Привет, " + this.name + ", " + this.age + " лет от роду."); }
    }

    User.createAnonymous = function() {
        var user = new User;
        user.name = 'Аноним';
        user.age = 0;
        return user;
    }

    User.createFromData = function(userData) {
        var user = new User;
        user.name = userData.name;
        user.age = userData.age;
        return user;
    }

    // Использование


    var guest = User.createAnonymous();
    guest.sayHi(); // Аноним

    var knownUser = User.createFromData({name: 'Вася', age: 25});
    knownUser.sayHi(); // Вася

    // полиморфные конструкторы использовать когда хз чо передадут
    // а в остальных случаях - фабричные методы решают
})();