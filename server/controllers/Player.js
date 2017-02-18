const url = require('url');
const Player = require('./PlayerService');

module.exports.getAllPlayerStats = function getAllPlayerStats (req, res, next) {
  Player.getAllPlayerStats(req.swagger.params, res, next);
};

module.exports.getSuggestions = function getSuggestions (req, res, next) {
  Player.getSuggestions(req.swagger.params, res, next);
};
