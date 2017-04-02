const controller = require('../DbController.js');

exports.getOverview = (args, res, next) => {
    /**
     * Returns an overview of the stats for a given backend.
     *
     * returns Overview
     **/

    const response = {
        kills: 1,
        time: 123,
        players: 312,
        hs: 123,
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};
