/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout');

exports.register = function () {
    require('./main-application').register();
    require('./c-loginpageid').register();
    require('./c-mastermaincontainerid').register();
    require('./c-registerpageid').register();
    require('./c-loginformid').register();
    require('./c-masterxorcontainerid').register();
    require('./c-registerformid').register();
    require('./c-masterprofileid').register();
    require('./c-mastereditprofileid').register();
    require('./c-campaignlistpageid').register();
    require('./c-newcampaignid').register();
    require('./c-masterprofileformid').register();
    require('./c-mastereditprofileformid').register();
    require('./c-runningcampaignslistid').register();
    require('./c-readycampaignslistid').register();
    require('./c-newcampaignformid').register();
                          };
