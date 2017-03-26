const controller = require('../DbController.js');
const Stats = require('../Stats.js');

exports.getAllPlayerStats = (args, res, next) => {
    const playerId = parseInt(args.id.value);
    const kills = controller.getAllAffectingKills(playerId);
    const sessions = controller.getAllSessions(playerId);
    const name = controller.getName(playerId);

    Promise.all([kills, sessions, name]).then(arr => {
        const player = Stats.getOverallStats(arr, playerId);
        player.weapons = Stats.getWeaponStats(arr[0], playerId);
        player.name = arr[2][0].name;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(player));
        controller.disconnect();
    });
};

exports.getSuggestions = (args, res, next) => {
    const part = args.part.value;

    controller.getMatchingPlayerNames(part).then(val => {
        const suggestions = {
            suggestions: val
                .filter(cur => cur.name.includes(part))
                .reduce((a, b) => {
                    return a.filter(cur => cur.name === b.name && cur.id === b.id).length === 0 ? a.concat(b) : a;
                }, [])
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(suggestions));
    });
};
