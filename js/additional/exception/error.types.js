/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 02.04.13
 * Time: 10:00
 */

/**
 * Ошибки делятся на два типа:
 * и все они сидят перед компьютером
 */
(function () {
    // 1. синтаксические ошибки
    // - когда нарушается структура кода
    // for (a = 5) {];
    // неправильный аргумент for, неправильная закрывающая скобка
    // обычно эти ошибки сидят перед компьютером

    // их можно отследить через компиляторы
    // они будут называться "ошибки времени компиляции"

    // 2. семантические ошибки
    // возникают, когда браузер смог прочесть скрипт
    // и уже выполняет код, но натыкается на косяк

    // например, не определена переменная
    // alert(nonexistant);

    // хоть здесь браузер и отлавливает ошибку
    // но бывает, что такие ошибки
    // входят в нормальную работу скрипта

    var number = +prompt("Введите число", '9');
    var base = +prompt("Введите основание системы счисления", '2');

    var convertedNumber = number.toString(base);
    // для 9 в двоичной системе счисления: 1001
    console.log(convertedNumber);
})();
