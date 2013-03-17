/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 17.03.13
 * Time: 11:26
 */

/**
 * Выводит текущий день недели в коротком формате
 * @param date
 */
function getWeekDay(date) {
    "use strict";
    var tmpDay, days;
    tmpDay = date.getDay();
    days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[tmpDay];
}

/**
 * Возвращает день недели в европейской нумерации
 * @param date
 * @returns {number}
 */
function getLocalDay(date) {
    "use strict";
    var tmpDay;
    tmpDay = date.getDay();
    if (tmpDay === 0) {
        tmpDay = 7;
    } else {
        tmpDay += 1;
    }
    return tmpDay;
}

/**
 * Возвращает дату, которая была за N дней до date
 * @param date
 * @param n
 * @returns {*}
 */
function getNDaysAgo(date, n) {
    "use strict";
    date.setDate(date.getDate() - n);
    return date;
}

function getLastDayInMonth(year, month)
{
    "use strict";

}