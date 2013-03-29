/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 26.03.13
 * Time: 15:17
 */

/**
 * Создайте декоратор makeCaching(f),
 * который берет функцию f и возвращает обертку,
 * которая кеширует её результаты.
 */
(function () {
    function f(arg) {
        return Math.random()*arg; // может быть любой функцией
    }

    function makeCaching(f) {
        // здесь будем хранить значения для уже посчитанных значений функции
        var obj = {};

        // этот вариант функции мы вернём
        function cache(a)
        {
            // если параметр уже был подсчитан
            if (a in obj)
            {
                // возвращаем значение из объекта
                return obj[a];
            }
            else
            {
                // иначе считаем по старой функции
                // с параметром a и записываем результат в tmp
                var tmp = f.call(this, a);

                // занесём подсчитанный результат в объект
                obj[a] = tmp;

                // и вернём его (результат)
                return tmp;
            }
        }
        return cache;
    }

    // переделаем функцию под кэш
    f = makeCaching(f);

    var a, b;

    a = f(1);
    b = f(1);
    console.log(a);
    console.log(b);
    console.log( a == b ); // true (значение закешировано)

    a = f(2);
    b = f(2);
    console.log(a);
    console.log(b);
    console.log( a == b ); // false, другой аргумент => другое значение
})();
