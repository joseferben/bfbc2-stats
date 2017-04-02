const controller = require('../DbController.js');
const Stats = require('../Stats.js');

exports.getAllPlayerStats = (args, res, next) => {
    const fullPlayerId = args.id.value;
    const playerId = parseInt(Stats._stripPlayerId(args.id.value));

    const kills = controller.getAllAffectingKills(fullPlayerId);
    const sessions = controller.getAllSessions(fullPlayerId);
    const name = controller.getName(fullPlayerId);

    Promise.all([kills, sessions, name]).then(arr => {
        const player = Stats.getOverallStats(arr, playerId);
        player.weapons = Stats.getWeaponStats(arr[0], playerId);
        player.name = arr[2][0].name;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(player));
    })
    .catch(err => {
      console.log(`Could not get player stats: ${err}`);
      res.end(JSON.stringify({
        response: 'Could not get player stats'
      }));
    });
;
};

exports.getSuggestions = (args, res, next) => {
    const part = args.part.value;
    res.setHeader('Content-Type', 'application/json');

    const appendServerId = function(suggestions, serverId) {
        return suggestions.map(cur => {
            return {
                name: cur.name,
                id: `${cur.id}-${serverId}`,
            };
        });
    };

    if (part.length < 4) {
        const response = {
            message: 'Player name too short',
        };

        res.end(JSON.stringify(response));
    } else {
        const suggestions = [];

        Promise.all(controller.getMatchingPlayerNames())
            .then(arr => {
                arr.forEach((val, idx) => {
                    suggestions.push(...appendServerId(val
                        .filter(cur => cur.name.includes(part))
                        .reduce((a, b) => {
                            return a.filter(cur => cur.name === b.name && cur.id === b.id).length === 0 ? a.concat(b) : a;
                        }, []), idx));
                });

                res.end(JSON.stringify({
                    suggestions
                }));
            })
            .catch(err => {
                console.log(`Could not get matching players: ${err}`);
                res.end(JSON.stringify({
                    response: 'Could not get player suggestions'
                }));
            });

    }
};
