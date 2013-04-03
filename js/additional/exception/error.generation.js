/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 02.04.13
 * Time: 16:46
 */

(function () {
    // конструкцию try..catch можно использовать
    // не только со встроенными ошибками Javascript
    // можно создавать свои ошибки

    // для примера проверим значения формы
    // обычно это реализуется функцией
    // с именем check... или validate...
    // которая получает то, что ввёл пользователь
    // и, в простейшем случае, возвращает true/false

    function checkValidAge(age) {
        if (age >= 18) {
            return true;            // OK
        }
        else {
            return false;           // ошибка
        }
    }

    // в реальной жизни такого true/false
    // может оказаться недостаточно
    // если проверка сложная, то стоит вернуть
    // ошибку с текстовым описанием, где именно косяк

    // решение без исключений выглядит так
    // функция возвращает:
    //   false, если всё хорошо
    //   или строку с ошибкой
    function checkValidAge(age) {
        if (age >= 18) {
            return false;
        } else {
            return "Вы слишком молоды. Приходите через " + (18-age) + " лет";
        }
    }

    // при таком подходе возврат false значит "всё в порядке"
    // если возвращена строка - значит где-то косяк

    // использование функции:
    var error = checkValidAge(age);
    if (error) {
        console.log(error);
    }

    // решение совершенно не универсальное
    // что, например, будет, если строка - это ОК?
    // ответ есть: исключения + генерация ошибки!
})();
