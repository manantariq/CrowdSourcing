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
        if (!context.vms['archiveapprovedimagestabid']) {
            context.vms['archivecampaigntabcontainerid'].active('archiveapprovedimagestabid');
            context.vms['archiveapprovedimagestabid'].init({mask: 'archiveapprovedimagedetailsid'});
        }
        data = data || {};
        var packet = {
            'id' : data['id']
        };
        context.vms['archiveapprovedimagedetailsid'].init({input: packet});
    };
};
