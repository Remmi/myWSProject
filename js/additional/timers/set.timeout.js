/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 27.03.13
 * Time: 19:03
 */

/**
 * setTimeout(func, delay)
 * func - функция или строка кода для исполнения
 * delay - задержка в милисекундах (1000 мс = 1 с)
 */
(function () {
    function func() {
        alert("Привет из функции!");
    }

    // выведет "Привет" через одну секунду
    setTimeout(func, 1000);

    // можно вызываться и так, только это может не сработать
    setTimeout("alert('Привет из строки!')", 1000);

    // такие вещи можно оборачивать в анонимные функции
    setTimeout(function () {alert("Привет из анонимной!"); }, 1000);

    // дополнительные параметры в setTimeout()
    // не сработают в IE9-
    function sayHi(who) {
        alert("Привет, я " + who);
    }

    setTimeout(sayHi, 1000, "Вася");

    // поэтому приходится извращаться
    // и запускать через анонимную функцию
    function sayHi(who) {
        alert("Привет, я " + who);
    }

    setTimeout(function() { sayHi('Вася') }, 1000);

    // при этом мы не сможем обратиться в контексте this
    // setTimeout его не передаёт
    function User(id) {
        this.id = id;

        this.sayHi = function() {
            alert(this.id);
        };
    }

    var user = new User(12345);

    setTimeout(user.sayHi, 1000); // ожидается 12345, но выведет "undefined"

    // однако стоит добавить промежуточную функцию-обёртку
    // и всё сразу станет тип-топ

    setTimeout(function() {
        user.sayHi();
    }, 1000);

    // отменить запуск бомбы можно через clearTimeout(timerId)
    // timerId можно получить при вызове setTimeout
    // он его как раз и возвращает

    var timerId = setTimeout(function () {alert("ПИЗДЕЦ!!!");}, 10000);
    clearTimeout(timerId);

})();