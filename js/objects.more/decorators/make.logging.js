/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 26.03.13
 * Time: 14:43
 */

(function () {
    function work(a)
    {
        return (a*a);
    }

    /**
     * Декоратор пропускает через себя функцию и массив
     * @param f             - исходная функция
     * @param log           - массив для записи
     * @returns {Function}  - возвращает переделанную функцию
     */
    function makeLogging(f, log) {
        // пропустив функцию через декоратор, мы возвращаем функцию
        return function() {
            // которая записывает все переданные в неё аргументы в лог
            log.push(arguments);

            // а также вызывает исходную функцию
            return f.apply(this, arguments);
        }
    }

    var log = [];
    work = makeLogging(work, log);

    console.log(work(1, 2, 3, 4)); // 1, добавлено в log
    console.log(work(5)); // 5, добавлено в log

    for (var i = 0; i < log.length; i++)
    {
        console.log('Лог: ' + [].join.call(log[i]));
    }
})();
