/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 27.03.13
 * Time: 14:24
 */

/**
 * Функция typeof возвращает тип переданного в неё параметра
 * Может вызываться как typeof x
 * И как typeof(x)
 */
(function () {
    console.log(typeof undefined);     // undefined
    console.log(typeof 0);             // number
    console.log(typeof true);          // boolean
    console.log(typeof "foo");         // string
    console.log(typeof {});            // object
    console.log(typeof null);          // object
    console.log(typeof function (){}); // function

    // как видно из проверки, null определяется как объект
    // однако это наглая ложь
    // var x = null;
    // x.prop = 1; // cannot set property 'prop' o null

    // объекты, массивы и дата для typeof все на одно лицо
    console.log( typeof {} );       // 'object'
    console.log( typeof [] );       // 'object'
    console.log( typeof new Date ); // 'object'

})();
