/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'executionURL' : data['execution']
        };
        var promise = context.actions['runningcampaignslist']({filters: packet});
        context.runningActionsByContainer['runningcampaigndetailspageid'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['runningcampaigndetailspageid'].splice(
                context.runningActionsByContainer['runningcampaigndetailspageid'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
