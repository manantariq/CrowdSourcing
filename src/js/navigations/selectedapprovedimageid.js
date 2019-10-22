/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['mastermaincontainerid']) {
            context.top.active('mastermaincontainerid');
            context.vms['mastermaincontainerid'].init({mask: 'masterxorcontainerid'});
        }
        if (!context.vms['runningcampaigndetailspageid']) {
            context.vms['masterxorcontainerid'].active('runningcampaigndetailspageid');
            context.vms['runningcampaigndetailspageid'].init({mask: 'runningcampaigntabcontainerid'});
        }
        if (!context.vms['approvedimagestabid']) {
            context.vms['runningcampaigntabcontainerid'].active('approvedimagestabid');
            context.vms['approvedimagestabid'].init({mask: 'approvedimagestatisticsid'});
        }
        data = data || {};
        var packet = {
            'id' : data['id']
        };
        context.vms['approvedimagestatisticsid'].init({input: packet});
    };
};
