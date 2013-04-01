/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 01.04.13
 * Time: 10:21
 */

(function () {
    var event = {
        title: "Конференция",
        date: "Сегодня"
    };

    /**
     * JSON.stringify()
     * преобразует значение в JSON-строку
     */
    var str = JSON.stringify(event);

    // {"title": "Конференция", "date":"сегодня"}
    console.log(str);

    // JSON.parse()
    // обратное преобразование
    var event_ = JSON.parse(str);

    console.log(event_);
})();
