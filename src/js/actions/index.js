/*jslint node: true, nomen: true */
"use strict";

exports.createActions = function (options) {
    return {
        'loginactionid': require('./loginactionid').createAction(options)
        ,'registeractionid': require('./registeractionid').createAction(options)
        ,'savemasterprofileactionid': require('./savemasterprofileactionid').createAction(options)
        ,'savecampaignactionid': require('./savecampaignactionid').createAction(options)
    };
};
