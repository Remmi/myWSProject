/**
 * Created with JetBrains WebStorm.
 * User: Roman
 * Date: 15.03.13
 * Time: 10:54
 */

/**
 * Превращает строку вида list-style-type в listStyleType
 * @param str
 * @returns {string}
 */
function camelize(str)
{
    var tmpArr = str.split("-");
    for (var i = 0; i < tmpArr.length; i++)
    {
        if (i > 0)
        {
            tmpArr[i] = tmpArr[i].charAt(0).toUpperCase() + tmpArr[i].slice(1);
        }
    }
    return tmpArr.join('');
}

/**
 * Удаляет класс из объекта
 * @param obj
 * @param cls
 */
function removeClass(obj, cls)
{
    var tmpArr = obj.className.split(' ');
    for (var i = tmpArr.length - 1; i >= 0; i--)
    {
        if (tmpArr[i] == cls)
        {
            tmpArr.splice(i, 1);
        }
    }
    obj.className = tmpArr.join(' ');
}

/**
 * Получает массив с числами arr и удаляет все числа вне диапазона a..b
 * @param arr
 * @param a
 * @param b
 */
function filterRangeInPlace(arr, a, b)
{
    for (var i = arr.length - 1; i >= 0; i--)
    {
        if (!((arr[i] >= a) && (arr[i] <= b)))
        {
            arr.splice(i, 1);
        }
    }
}

/**
 * Сортирует массив объектов по ключу
 * @param arr
 * @param key
 */
function sortByKey(arr, key)
{
    function compareKeys(a, b)
    {
        return a[key] - b[key];
    }
    arr.sort(compareKeys);
}