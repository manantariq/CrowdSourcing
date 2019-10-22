/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'annotation_replica' : data['annotation_replica']
            ,'annotation_size' : data['annotation_size']
            ,'id' : data['id']
            ,'name' : data['name']
            ,'selection_replica' : data['selection_replica']
            ,'threshold' : data['threshold']
        };
        var promise = context.actions['saveeditcampaignactionid']({filters: packet});
        context.runningActionsByContainer['editcampaigncontainerid'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['editcampaigncontainerid'].splice(
                context.runningActionsByContainer['editcampaigncontainerid'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
