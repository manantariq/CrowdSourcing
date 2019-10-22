/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['mastermaincontainerid']) {
            context.top.active('mastermaincontainerid');
            context.vms['mastermaincontainerid'].init({mask: 'masterxorcontainerid'});
        }
        if (!context.vms['editcampaigncontainerid']) {
            context.vms['masterxorcontainerid'].active('editcampaigncontainerid');
            context.vms['editcampaigncontainerid'].init({mask: 'editcampaignformid'});
        }
        data = data || {};
        var packet = {
            'annotation_replica' : data['annotation_replica']
            ,'annotation_size' : data['annotation_size']
            ,'id' : data['id']
            ,'threshold' : data['threshold']
            ,'name' : data['name']
            ,'selection_replica' : data['selection_replica']
        };
        context.vms['editcampaignformid'].init({input: packet});
    };
};
