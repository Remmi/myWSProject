/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 31.03.13
 * Time: 1:01
 */

/**
 * Метод arr.reduce(reduceCallback[, initialValue])
 * применяет функцию reduceCallback ко всем элементам массива
 * по очереди слева направо, сохраняя промежуточный результат
 */

/**
 * reduceCallback(previousValue, currentItem, index, arr)
 * previousValue - последний (промежуточный) результат вызова функции
 * currentItem - текущий элемент массива в переборке
 * index - номер текущего элемента
 * arr - обрабатываемый массив
 */
(function () {
    /**
     * Лучше всего посмотреть на примере
     */
    var arr = ["a", "b", "c", "d", "e"];

    // прибавляем к строке очередной элемент
    function join(previousStr, currentItem, i) {
        var str = " - " + previousStr + currentItem;
        console.log(str);
        return str;
    }

    var result = arr.reduce(join, "xyz_");

    // xyz_abcde
    console.log(result);

    // если не указывать начальное значение
    // то берётся первый элемент, а перебор стартует со второго
    console.log(arr.reduce(join));

    // пример с суммой
    function sum(previousSum, currentItem) {
        return previousSum + currentItem;
    }

    console.log( [1,2,3,4,5].reduce(sum) ); // 1+2+3+4+5 = 15

    // reduceRight работает аналогично
    // но перебирает элементы справа налево
    console.log( ["a","b","c","d"].reduceRight(join) ); // dcba


})();
