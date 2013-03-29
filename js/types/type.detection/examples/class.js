/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 27.03.13
 * Time: 14:33
 */

/**
 * У всех встроенных объектов есть скрытое свойство [[Class]]
 * Оно равно Array для массивов, Date для дат и т.д.
 * Напрямую его нельзя получить, но есть пара трюков
 */
(function () {
    var obj = {};
    console.log(obj);
    // выведет [object Object], обратившись к [[Class]]
    console.log(obj.toString());

    var date = new Date();
    console.log(date);
    // выведет дату как обычно
    console.log(date.toString());

    // одолжим метод у объекта, раз в нём всё срабатывает
    var toClass = {}.toString;
    // [object Date] к вашим услугам
    console.log(toClass.apply(date));

    var arr = [];
    // здесь вообще ничего не выведется
    console.log(arr.toString);
    // [object Array]
    console.log(toClass.apply(arr));

    // работает прекрасно для примитивов
    // [object Number]
    console.log(toClass.apply(123));
    // [object String]
    console.log(toClass.apply("str"));

    // однако с пользовательскими классами и экземплярами совсем беда
    // определяет как object и дальше не идёт
    function Animal(name) {
        this.name = name;
    }
    var animal = new Animal("Винни-пух");
    var type = toClass.apply( animal );
    // [object Object]
    console.log(type);

})();
