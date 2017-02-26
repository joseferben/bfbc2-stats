const DbController = require('../DbController.js');
const Stats = require('../Stats.js');

exports.getAllPlayerStats = (args, res, next) => {
  const playerId = parseInt(args.id.value);
    const controller = new DbController().connect();
    const kills = controller.getAllAffectingKills(playerId);
    const sessions = controller.getAllSessions(playerId);

    Promise.all([kills, sessions]).then(arr => {
        const player = Stats.getOverallStats(arr[1]);
        player.weapons = Stats.getWeaponStats(arr[0], playerId);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(player));
        controller.disconnect();
    });
};

exports.getSuggestions = (args, res, next) => {
    const part = args.part.value;
    const controller = new DbController().connect();

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
