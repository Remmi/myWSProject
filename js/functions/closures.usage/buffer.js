/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 22.03.13
 * Time: 13:42
 */

/**
 * Функция создаёт внутренний буфер из строки
 * Возвращает функцию с параметром str
 * Если функция вызвана с параметром, он добавляется к буферу
 * Буфер выводится, если параметр не задан
 * @returns {Function}
 */
function makeBuffer()
{
    "use strict";
    // инициазируем буфер
    var textBuffer;
    textBuffer = "";

    /**
     * Создаём объект Buffer
     *       $() - выводит буфер
     *    $(str) - добавляет в буфер строку str
     * $.clear() - очищает буфер
     * @param str
     * @returns {string}
     * @constructor
     */
    function Buffer(str)
    {
        if (str === undefined) {
            return textBuffer;
        }
        else {
            textBuffer += String(str);
        }
    }

    Buffer.clear = function () {
        textBuffer = "";
    };

    return Buffer;
}

// очередной псевдо-юнит-тест
var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log(buffer()); // Замыкания Использовать Нужно!

buffer.clear(); // очищаем буфер

buffer("Тест");
buffer(" тебя не съест ");
console.log(buffer()); // Тест тебя не съест

