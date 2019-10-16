/*jslint node: true, nomen: true */
"use strict";

exports.createActions = function (options) {
    return {
        'registeractionid': require('./registeractionid').createAction(options)
        ,'loginactionid': require('./loginactionid').createAction(options)
    };
};
