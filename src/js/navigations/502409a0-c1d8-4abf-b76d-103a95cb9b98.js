/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['mastermaincontainerid']) {
            context.top.active('mastermaincontainerid');
            context.vms['mastermaincontainerid'].init({mask: 'masterxorcontainerid'});
        }
        if (!context.vms['archivecampaigndetailspageid']) {
            context.vms['masterxorcontainerid'].active('archivecampaigndetailspageid');
            context.vms['archivecampaigndetailspageid'].init({mask: 'archivecampaigntabcontainerid'});
        }
        if (!context.vms['archiveannotatedimagestabid']) {
            context.vms['archivecampaigntabcontainerid'].active('archiveannotatedimagestabid');
            context.vms['archiveannotatedimagestabid'].init({mask: 'archiveannotatedimagedetailsid'});
        }
        data = data || {};
        var packet = {
            'id' : data['id']
        };
        context.vms['archiveannotatedimagedetailsid'].init({input: packet});
    };
};
