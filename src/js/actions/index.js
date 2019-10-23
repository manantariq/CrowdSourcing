/*jslint node: true, nomen: true */
"use strict";

exports.createActions = function (options) {
    return {
        'loginactionid': require('./loginactionid').createAction(options)
        ,'registeractionid': require('./registeractionid').createAction(options)
        ,'savemasterprofileactionid': require('./savemasterprofileactionid').createAction(options)
        ,'savecampaignactionid': require('./savecampaignactionid').createAction(options)
        ,'saveeditcampaignactionid': require('./saveeditcampaignactionid').createAction(options)
        ,'startcampaignactionid': require('./startcampaignactionid').createAction(options)
        ,'runningcampaignslist': require('./runningcampaignslist').createAction(options)
        ,'uploadimageactionid': require('./uploadimageactionid').createAction(options)
        ,'deleteimageactionid': require('./deleteimageactionid').createAction(options)
        ,'enableannotatoractionid': require('./enableannotatoractionid').createAction(options)
        ,'disableannotatoractionid': require('./disableannotatoractionid').createAction(options)
        ,'enableselectorsactionid': require('./enableselectorsactionid').createAction(options)
        ,'disableselectoractionid': require('./disableselectoractionid').createAction(options)
    };
};
