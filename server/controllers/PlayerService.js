const DbController = require('../DbController.js');
const Stats = require('../Stats.js');

exports.getAllPlayerStats = (args, res, next) => {
    const playerId = args.id.value;
    const controller = new DbController().connect();
    const kills = controller.getAllAffectingKills(playerId);
    const sessions = controller.getAllSessions(playerId);

    Promise.all([kills, sessions]).then(arr => {
        const player = Stats.getOverallStats(arr);
        player.weapons = Stats.getWeaponStats(arr[0]);
        console.log(player);
        controller.disconnect();
    });
    /**
     * Returns all available stats of a player.
     *
     * id String 
     * returns Player
     **/
    var examples = {};
    examples['application/json'] = {
        "id": "aeiou",
        "kills": 1.3579000000000001069366817318950779736042022705078125,
        "deaths": 1.3579000000000001069366817318950779736042022705078125,
        "hs": 1.3579000000000001069366817318950779736042022705078125,
        "seconds": 12313131314,
        "score": 1231313113123,
        "connections": 123123131231,
        "weapons": [{
            "label": "aeiou",
            "kills": 1.3579000000000001069366817318950779736042022705078125,
            "headshots": 1231231231,
            "deaths": 1.3579000000000001069366817318950779736042022705078125
        }],
    };
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
};

exports.getSuggestions = (args, res, next) => {
    const part = args.part.value;
    const controller = new DbController().connect();

    controller.getAllPlayerNames().then(val => {
        const suggestions = {
            suggestions: val.filter(cur => cur.name.includes(part))
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(suggestions));
    });
};
