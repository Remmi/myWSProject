/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 02.04.13
 * Time: 16:05
 */

(function () {
    // конструкция try..catch может содержать
    // ещё один блок: finally
    // в нём код выполняется всегда:
    // - после блока try, если ошибок не было
    // - после catch, если они были

    // её используют, чтобы завершить начатые операции
    // и очистить ресурсы, которые должны быть очищены
    // в любом случае: как при ошибке, так и при нормальном выполнении

    // например, функция в процессе работы создаёт объект
    // который в конце нужно уничтожить
    function doSomethingGood() {
        // создать что-то, что нужно очистить
        var tmpObject = document.createElement("div");
        try {
            tmpObject.id = "pidar";                     // установить атрибут id
            tmpObject.innerHTML = "<h1>Пидарасы</h1>";  // начальное содержимое
            document.body.appendChild(tmpObject);       // добавить его в конец документа
            console.log("try выполнен")
        }
        catch (err) {
            console.log(err);
        } finally {
            setTimeout(function () {document.body.removeChild(tmpObject); }(), 1000);
            console.log("finally выполнен");
        }
    }

    doSomethingGood();

    // а также finally позволяет избежать дублирования кода
    // как в try, так и в catch
    // у него есть такая особенность - он срабатывает при любом выходе
    // в том числе и по return
    // finally получает управление до того,
    // как контроль возвращается во внешний код
    function func() {
        try {
            // сразу вернуть значение
            return 1;
        } catch(e) {
            alert('Сюда управление не попадёт, ошибок нет');
        } finally {
            alert('Вызов завершён');
        }
    }
    console.log( func() );
})();
