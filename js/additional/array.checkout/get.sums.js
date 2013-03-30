/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 31.03.13
 * Time: 1:41
 */

(function () {
    /**
     * Ваша функция getSums(arr) должна возвращать новый массив
     * из такого же числа элементов, в котором на каждой позиции
     * должна быть сумма элементов arr до этой позиции включительно.
     */

    function getSums(arr) {
        var newArr = [];

        function Sum(previousValue, currentItem) {
            newArr.push(previousValue + currentItem);
            return previousValue + currentItem;
        }

        arr.reduce(Sum, 0);
        return newArr;
    }

    var arr = [1, 2, 3, 4, 5];
    console.log(getSums(arr));

    console.log(getSums([-2, -1, 0, 1]));
})();
