const url = require('url');
const Default = require('./DefaultService');

module.exports.rootGET = (req, res, next) => Default.rootGET(req.swagger.params, res, next);

