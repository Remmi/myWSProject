/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 01.04.13
 * Time: 11:50
 */

(function () {
    // предположим, что мы получили с сервера
    // корректно сериализованный объект event
    // и теперь нам нужно восстановить его

    // вызовем для этого JSON.parse()
    var str = '{"title":"Конференция","date":"2012-11-30T00:00:00.000Z"}';

    var event = JSON.parse(str);

    // console.log( event.date.getDate() ); // ошибка!
    // TypeError: Object 2012-11-30T00:00:00.000Z has no method 'getDate'

    // дело в том, что значением event.date является строка,
    // а отнюдь не объект Date
    // откуда методу JSON.parse() знать,
    // что нужно превратить строку именно в дату?

    // для интеллектуального восстановления из строки
    // у JSON.parse(str, reviver) есть второй параметр
    // который является функцией function(key, value)

    // она принимает по очереди
    // все создаваемые пары "ключ":"значение"
    // и может возвратить преобразованное значение value
    // или undefined, если его нужно игнорировать

    // в данном случае мы можем указать,
    // что ключ date всегда означает дату

    // дата в строке - в формате UTC
    var str1 = '{"title":"Конференция","date":"2012-11-04T20:00:00.000Z"}';

    var event1 = JSON.parse(str, function(key, value) {
        if (key == 'date') return new Date(value);
        return value;
    });

    // 1 или 30, в зависимости от локальной зоны
    console.log( event1.date.getDate() );

})();
