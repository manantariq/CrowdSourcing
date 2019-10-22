/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['mastermaincontainerid']) {
            context.top.active('mastermaincontainerid');
            context.vms['mastermaincontainerid'].init({mask: 'masterxorcontainerid'});
        }
        if (!context.vms['runningcampaigndetailspageid']) {
            context.vms['masterxorcontainerid'].active('runningcampaigndetailspageid');
            context.vms['runningcampaigndetailspageid'].init({mask: 'runningcampaigntabcontainerid'});
        }
        if (!context.vms['annotatedimagestabid']) {
            context.vms['runningcampaigntabcontainerid'].active('annotatedimagestabid');
            context.vms['annotatedimagestabid'].init({mask: 'annotatedimagestatisticsid'});
        }
        context.vms['annotatedimagestatisticsid'].init();
    };
};
