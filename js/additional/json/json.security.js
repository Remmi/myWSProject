/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 01.04.13
 * Time: 20:16
 */

(function () {
    // если мы можем так просто пропустить JSON через eval
    // то есть маза для проверки, а не фуфло ли нам впаривают?
    // уверены мы можем быть в своём сервере, а если данные пришли с другого?

    // метод JSON.parse гарантирует,
    // что некорректный JSON просто выдаст ошибку
    // а в eval можно добавить дополнительную проверку
    // регулярным выражением, описанным в RFC 4627, секции 6

    // поскольку RFC 4627 это сложно и далеко
    // то я просто оставлю это здесь
    //    var obj = !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(
    //        str.replace(/"(\\.|[^"\\])*"/g, ''))) &&
    //        eval('(' + str + ')');

    // проверим! злой и страшный обджэкто
    var str = '{}(function() {alert(1)}())';

    // выведет 1, такого допускать нельзя!
    // eval('(' + str + ')');

    var user = !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(
        str.replace(/"(\\.|[^"\\])*"/g, ''))) &&
        eval('(' + str + ')');

    // false, объект не преобразован
    console.log(user);


})();
