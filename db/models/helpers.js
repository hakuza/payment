const mongoose = require('mongoose');
const model = require('../index.js')
const findAll = function (num,callback) {
  model.find({id:num},callback)
}


module.exports = findAll