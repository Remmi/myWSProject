/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 27.03.13
 * Time: 10:11
 */

(function () {

    // вызываем функцию sum с параметром a
    function sum(a) {
        // присваиваем в res значение a
        var res = a;

        // объявляем функцию f с параметром b
        function f(b) {
            // в которой к res прибавляется b
            res += b;

            // и возвращается сама функция f
            return f;
        }

        // добавляем метод toString к функции f
        // он будет возвращать результат функции
        f.toString = function() { return res; };

        // и для первого раза вернём функцию f,
        // поскольку мы её просто объявили
        return f;
    }

    console.log(sum(1)(2));              // 3
    console.log(sum(5)(-1)(2));          // 6
    console.log(sum(6)(-1)(-2)(-3));     // 0
    console.log(sum(0)(1)(2)(3)(4)(5));  // 15
})();
