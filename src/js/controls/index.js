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
    require('./c-editcampaigncontainerid').register();
    require('./c-campaignlistpageid').register();
    require('./c-newcampaignid').register();
    require('./c-readycampaigndetailspageid').register();
    require('./c-runningcampaigndetailspageid').register();
    require('./c-masterprofileformid').register();
    require('./c-mastereditprofileformid').register();
    require('./c-editcampaignformid').register();
    require('./c-runningcampaignslistid').register();
    require('./c-readycampaignslistid').register();
    require('./c-newcampaignformid').register();
    require('./c-readycampaigndetailsid').register();
    require('./c-campaigntabcontainerid').register();
    require('./c-runningcampaignsdetailsid').register();
    require('./c-runningcampaigntabcontainerid').register();
    require('./c-imagecontainerid').register();
    require('./c-workercontainerid').register();
    require('./c-allimagetabid').register();
    require('./c-allworkerstabid').register();
    require('./c-approvedimagestabid').register();
    require('./c-annotatedimagestabid').register();
    require('./c-uploadimageformid').register();
    require('./c-imagelistid').register();
    require('./c-workerslist').register();
    require('./c-campaignworkersdetailsid').register();
    require('./c-allimageslistid').register();
    require('./c-allworkerslistid').register();
    require('./c-approvedimageslistid').register();
    require('./c-approvedimagestatisticsid').register();
    require('./c-annotatedimageslistid').register();
    require('./c-annotatedimagestatisticsid').register();
                                                                          };
