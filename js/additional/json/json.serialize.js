/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 01.04.13
 * Time: 10:36
 */

(function () {
    // при сериализации объекта
    // вызывается его метод toJSON
    // если такого метода нет,
    // перечисляется его свойства, кроме функций

    function Room() {
        this.number = 23;
        this.occupy = function () {};
    }

    event = {
        title: "Конференция",
        date: new Date(2013, 3, 1),
        room: new Room()
    };

    /*
     {
         "title":"Конференция",
         "date":"2013-03-31T20:00:00.000Z",  // (1)
         "room": {"number":23}               // (2)
     }
     */

    console.log(JSON.stringify(event));
})();
