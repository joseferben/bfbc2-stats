const controller = require('../DbController.js');

exports.getOverview = (args, res, next) => {
    /**
     * Returns an overview of the stats for a given backend.
     *
     * returns Overview
     **/
    res.setHeader('Content-Type', 'application/json');

    Promise.all(controller.getKills()
            .concat(controller.getPlayerAmount())
            .concat(controller.getHeadshotAmount()))
        .then(arr => {
            const response = {
                kills: arr.slice(0, 3).reduce((a, b) => a + b[0].kills, 0),
                players: arr.slice(3, 6).reduce((a, b) => a + b[0].players, 0),
                hs: arr.slice(6, 9).reduce((a, b) => a + b[0].kills, 0),
            };
            res.end(JSON.stringify(response));

        })
        .catch(err => {
            console.log(`Could not get overview stats: ${err}`);
            res.end(JSON.stringify({
                message: 'Could not retrieve get the overview stats',
            }));
        });
};
