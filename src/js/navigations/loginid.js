/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'password' : data['password']
            ,'username' : data['username']
        };
        var promise = context.actions['loginactionid']({filters: packet});
        context.runningActionsByContainer['loginpageid'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['loginpageid'].splice(
                context.runningActionsByContainer['loginpageid'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
