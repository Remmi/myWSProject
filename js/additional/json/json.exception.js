/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 01.04.13
 * Time: 11:13
 */

(function () {
    // попытаемся преобразовать в JSON объект,
    // содержащий ссылку на DOM
    var user = {
        name: "Вася",
        age: 25,
        elem: document.body
    };

    // выдаст ошибку
    // console.log(JSON.stringify(user));
    // Uncaught TypeError: Converting circular structure to JSON

    // произошла ошибка, но дело не в том, что DOM-объекты запрещены
    // всё потому, что DOM-объект - сложная структура с круговыми ссылками
    // поэтому его преобразовать невозможно

    // во втором параметре JSON.stringify(value, replacer)
    // можно указать массив свойств, которые подлежат сериализации
    // выдаст {"name":"Вася", "age":25}
    console.log(JSON.stringify(user, ["name", "age"]));

    // для более сложных ситуаций
    // можно передать функцию function(key, value),
    // которая возвращает сериализированное value
    // либо undefined, если его не нужно включать в результат

    var str2 = JSON.stringify(user, function(key, value) {
        if (key == 'elem') return undefined;
        return value;
    } );

    // функция пропускает свойства с ключом "elem"
    console.log(str2); // {"name":"Вася","age":25}

    // функция replacer работает рекурсивно
    // если объект содержит вложенные объекты, массивы и т.п.
    // то все они пройдут через replacer

})();
