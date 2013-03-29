/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 26.03.13
 * Time: 16:32
 */

/**
 * Строковое преобразование
 */
(function () {
    var user = {
        firstName: 'Василий'
    }

    // выведет [object Object]
    alert(user);
    // alert автоматически преобразует параметр в строковый формат

    // если в объекте присутствует метод toString, то срабатывает именно он
    user["toString"] = function () { return "Пользователь: " + this.firstName };

    // должно вывести "Пользователь: Василий"
    alert(user);

    // необязательно, что будет возвращаться строка
    // однако объект вернуть нельзя
    // а число (и другие примитивы) можно
    user["toString"] = function () { return (1+4); };

    // 5
    alert(user);

    // все объекты, включая встроенные, имеют свои реализации метода toString
    alert( [1,2] );    // toString для массивов выводит список элементов "1,2"
    alert( new Date ); // toString для дат выводит дату в виде строки
    alert( function() { } ); // toString для функции выводит её код

})();
