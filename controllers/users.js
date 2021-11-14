const User = require("../models/users");

exports.create = (req, res, next) => {
  res.send(req.body);
};
