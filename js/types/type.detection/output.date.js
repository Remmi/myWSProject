/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 27.03.13
 * Time: 16:31
 */

/**
 * Напишите функцию outputDate(date), которая выводит дату в формате dd.mm.yy.
 * Ее первый аргумент должен содержать дату в одном из видов:
 * Как объект Date.
 * Как строку в формате yyyy-mm-dd.
 * Как число секунд с 01.01.1970.
 * Как массив [гггг, мм, дд], месяц начинается с нуля
 * Для этого вам понадобится определить тип данных аргумента
 * и, при необходимости, преобразовать входные данные в нужный формат.
 */
(function () {
    function outputDate(date) {
        var getClass = {}.toString;
        var strType = getClass.apply(date);
        var strRes; // результат
        var day, month, year;

        switch (strType) {
            case "[object String]":
                var arr = date.split("-");
                day = arr[2];
                month = arr[1];
                year = arr[0];
                break;
            case "[object Number]":
                var dateObject = new Date(date*1000);
                day = dateObject.getDate();
                month = dateObject.getMonth();
                year = dateObject.getFullYear();
                break;
            case "[object Array]":
                day = date[2];
                month = date[1] + 1;
                year = date[0];
                break;
            case "[object Date]":
                day = date.getDate();
                month = date.getMonth() + 1;
                year = date.getFullYear();
                break;
        }

        year = year % 100;
        day += "";
        month += "";
        year += "";
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        if (year.length == 1) {
            year = "0" + year;
        }

        strRes = day + "." + month + "." + year;
        return strRes;
    }

    console.log(outputDate( '2011-10-02' ));       // 02.10.11
    console.log(outputDate( 1234567890 ));         // 14.02.09
    console.log(outputDate( [2000,0,1] ));         // 01.01.00
    console.log(outputDate( new Date(2000,0,1) )); // 01.01.00

})();
