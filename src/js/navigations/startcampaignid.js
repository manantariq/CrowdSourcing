/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'executionURL' : data['execution']
        };
        var promise = context.actions['startcampaignactionid']({filters: packet});
        context.runningActionsByContainer['readycampaigndetailspageid'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['readycampaigndetailspageid'].splice(
                context.runningActionsByContainer['readycampaigndetailspageid'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
