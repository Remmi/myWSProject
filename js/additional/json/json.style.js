/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 01.04.13
 * Time: 11:33
 */

(function () {
    // в методе JSON.stringify(value, replacer, space)
    // есть ещё и третий параметр space

    // если он является числом, то уровни в JSON
    // оформляются указанным количеством пробелов
    // если строкой - вставляется эта строка
    var user = {
        name: "Вася",
        age: 25,
        roles: {isAdmin: false, isEditor: true}
    };

    var str = JSON.stringify(user, "", 4);

    console.log(str);
    /* Результат -- красиво сериализованный объект:
     {
         "name": "Вася",
         "age": 25,
         "roles": {
             "isAdmin": false,
             "isEditor": true
         }
     }
     */
})();
