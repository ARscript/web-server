'use strict'
var fs = require('fs'),
    path = require('path'),
    Mongoose = require('mongoose'),
    config = require('../../../lib/config')(),
    models = {};

module.exports = Mongoose
