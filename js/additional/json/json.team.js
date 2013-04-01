/**
 * Created with JetBrains WebStorm.
 * User: Roman Boykov
 * Date: 01.04.13
 * Time: 23:28
 */

(function () {
    var leader = {
        name: "Василий Иванович",
    }

    var soldier = {
        name: "Петька"
    }

    leader.soldier = soldier;
    soldier.leader = leader;

    var team = [leader, soldier];

    // задаём явно метод toJSON
    // иначе не спарсит из-за циклических ссылок
    team.toJSON = function () {
        return "хуй";
    }

    // можно позаимствовать
    // dojox.json.ref.toJson
    // dojox.json.ref.fromJson
    var str = JSON.stringify(team);
    console.log(str);
})();
