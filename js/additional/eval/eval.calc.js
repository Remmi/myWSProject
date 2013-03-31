/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 31.03.13
 * Time: 13:02
 */

/**
 * Напишите интерфейс, который принимает математическое выражение prompt
 * и возвращает его результат
 * Проверять выражение на корректность не требуется
 */
(function () {
    var strPrompt = prompt("Введите выражение: ");
    var res = eval(strPrompt);
    console.log(res);
})();
