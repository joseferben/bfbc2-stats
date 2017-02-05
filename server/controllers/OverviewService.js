const DbController = require('../DbController');

exports.getOverview = (args, res, next) => {
    /**
     * Returns an overview of the stats for a given backend.
     *
     * returns Overview
     **/
    const controller = new DbController().connect();

    res.setHeader('Content-Type', 'application/json');
    controller.getKills()
        .then(val => res.end(JSON.stringify({
            kills: val[0].kills
        })))
        .catch(err => {
            console.log(err);
            res.end();
        });

};
