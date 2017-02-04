const url = require('url');
const Overview = require('./OverviewService');

module.exports.getOverview = function getOverview (req, res, next) {
  Overview.getOverview(req.swagger.params, res, next);
};
