/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 29.03.13
 * Time: 22:38
 */

/**
 * Статические свойства объекта
 * записываются в его конструктор
 */
(function () {
    function Article() {
        Article.count++;
        this.created = new Date();
        Article.lastCreated = this.created;
    }

    // они хранят данные, специфичные не для одного объекта
    // а для всех статей целиком
    Article.count = 0;
    Article.DEFAULT_FORMAT = "html";

    // а ещё есть статические методы
    // которые привязаны к функции-конструктору

    // выводит количество созданных экземпляров статей
    Article.showCount = function () {
        console.log(this.count);
    }

    new Article();
    new Article();
    Article.showCount();
})();

/**
 * Очень удобно таким макаром
 * сравнивать экземпляры класса
 */
(function () {
    function Journal(date) {
        this.date = date;

        this.formatDate = function (date) {
            return date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear();
        }

        this.getTitle = function () {
            return "Выпуск от " + this.formatDate(this.date);
        }
    }

    /**
     * Возвращает отрицательное число, если А раньше Б
     * Положительное, если А позже Б
     * и нуль, если А и Б вышли в один день
     * @param journalA
     * @param journalB
     * @returns {number}
     */
    Journal.compare = function(journalA, journalB) {
        return journalA.date - journalB.date;
    }

    // используем то, что написали
    var journals = [
        new Journal(new Date(2012, 1, 1)),
        new Journal(new Date(2012, 0, 1)),
        new Journal(new Date(2011, 11, 1))
    ];

    function findMin(journals) {
        var min = 0;
        for (var i = 0; i < journals.length; i++) {
            // используем statique methodique
            // если разница между минимальным и текущим больше ноля
            if (Journal.compare(journals[min], journals[i]) > 0)
            {
                // то запишем текущий в минимальный
                min = i;
            }
        }
        return journals[min];
    }

    console.log(findMin(journals).getTitle());

    console.log(new Journal(new Date()).getTitle());
})();