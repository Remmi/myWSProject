/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 22.03.13
 * Time: 13:42
 */

/**
 * Функция фильтрации массива arr по признаку func()
 * @param arr
 * @param func
 * @returns {Array}
 */
function filter(arr, func)
{
    "use strict";
    var resArr, i;
    resArr = [];
    for (i = 0; i < arr.length; i += 1)
    {
        if (func(arr[i]))
        {
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

/**
 * Функция фильтрации диапазона
 * При вызове обозначаются границы
 * Далее возвращается функция, которая сравнивает элемент x с заданными границами
 * @param a
 * @param b
 * @returns {Function}
 */
function inBetween(a, b)
{
    "use strict";
    return function (x) {
        var isBetween;
        isBetween = ((x >= a) && (x <= b));
        return isBetween;
    }
}

/**
 * Функция проверяет, есть ли значение в массиве arr
 * Сначала задаётся массив arr при вызове
 * Далее возвращается функция, которая ищет x в массиве
 * @param arr
 * @returns {Function}
 */
function inArray(arr)
{
    "use strict";
    return function (x) {
        var isInArray, i;
        for (i = 0; i < arr.length; i += 1)
        {
            if (x === arr[i])
            {
                isInArray = true;
                break;
            }
        }
        return isInArray;
    }
}

// отладочный вызов (надо сделать юнит-тестом)
var arr = [1, 2, 3, 4, 5, 6, 7];                                // исходный массив
console.log(filter(arr, function (a) { return a % 2 == 0 }));   // [2, 4, 6]
console.log(filter(arr, inBetween(3, 6)));                      // [3, 4, 5, 6]
console.log(filter(arr, inArray([1, 2, 10])));                  // [1, 2]
