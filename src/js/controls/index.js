/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout');

exports.register = function () {
    require('./main-application').register();
    require('./c-registerpageid').register();
    require('./c-registerformid').register();
    require('./c-loginpageid').register();
    require('./c-loginformid').register();
          };
