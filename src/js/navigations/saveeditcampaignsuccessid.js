/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['mastermaincontainerid']) {
            context.top.active('mastermaincontainerid');
            context.vms['mastermaincontainerid'].init({mask: 'masterxorcontainerid'});
        }
        if (!context.vms['readycampaigndetailspageid']) {
            context.vms['masterxorcontainerid'].active('readycampaigndetailspageid');
            context.vms['readycampaigndetailspageid'].init({mask: 'readycampaigndetailsid'});
        }
        data = data || {};
        var packet = {
            'id' : data['id']
        };
        context.vms['readycampaigndetailsid'].init({input: packet});
    };
};
