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

/**
 * Возвращает последний день месяца
 * @param year
 * @param month
 * @returns {number}
 */
function getLastDayInMonth(year, month) {
    "use strict";
    var tmpDate;
    tmpDate = new Date(year, month + 1);
    tmpDate.setDate(0);
    return tmpDate.getDate();
}

/**
 * Возвращает количество секунд, прошедших с начала дня
 * @returns {number}
 */
function getSecondsPassedToday() {
    "use strict";
    var nowDate, startDate, diff;
    nowDate = new Date();
    startDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
    diff = nowDate - startDate;
    diff = Math.round(diff / 1000);
    return diff;
}

/**
 * Возвращает количество секунд, оставшихся до конца дня
 * @returns {number}
 */
function getSecondsLeftToday() {
    "use strict";
    return (86400 - getSecondsPassedToday());
}

