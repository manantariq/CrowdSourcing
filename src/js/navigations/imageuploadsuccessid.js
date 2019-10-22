/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['mastermaincontainerid']) {
            context.top.active('mastermaincontainerid');
            context.vms['mastermaincontainerid'].init({mask: 'masterxorcontainerid'});
        }
        if (!context.vms['readycampaigndetailspageid']) {
            context.vms['masterxorcontainerid'].active('readycampaigndetailspageid');
            context.vms['readycampaigndetailspageid'].init({mask: 'campaigntabcontainerid'});
        }
        if (!context.vms['imagecontainerid']) {
            context.vms['campaigntabcontainerid'].active('imagecontainerid');
        }
        context.vms['imagecontainerid'].init();
    };
};
