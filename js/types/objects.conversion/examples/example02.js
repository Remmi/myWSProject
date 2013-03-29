/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 26.03.13
 * Time: 16:55
 */

/**
 * Численное преобразование
 */
(function () {
    // ВНЕЗАПНО!
    // для численного преобразования объекта
    // используется метод valueOf
    // а если его нет, то toString

    var room = {
        number: 777,
        valueOf: function () { return this.number; },
        toString: function () { return (this.number+1); }
    }

    console.log(+room); // 777, вызвался valueOf

    delete(room.valueOf);

    console.log(+room); // 778, вызвался toString

    // у большинства встроенных объектов нет метода valueOf
    // поэтому численное и строковое преобразование для них работают одинаково

    // исключением является объект Date,
    // который поддерживает оба типа преобразований

    // toString: Дата в виде читаемой строки
    alert(new Date());

    // valueOf: количество миллисекунд прошедших с 01.01.1970
    alert(+new Date());
})();
