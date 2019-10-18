/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'annotation_replica' : data['Annotation Replica']
            ,'annotation_size' : data['Annotation Size']
            ,'name' : data['Name']
            ,'selection_replica' : data['Selection Replica']
            ,'threshold' : data['Threshold']
        };
        var promise = context.actions['savecampaignactionid']({filters: packet});
        context.runningActionsByContainer['newcampaignid'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['newcampaignid'].splice(
                context.runningActionsByContainer['newcampaignid'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
