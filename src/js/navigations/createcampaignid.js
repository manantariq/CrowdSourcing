/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['mastermaincontainerid']) {
            context.top.active('mastermaincontainerid');
            context.vms['mastermaincontainerid'].init({mask: 'masterxorcontainerid'});
        }
        if (!context.vms['newcampaignid']) {
            context.vms['masterxorcontainerid'].active('newcampaignid');
        }
        context.vms['newcampaignid'].init();
    };
};
