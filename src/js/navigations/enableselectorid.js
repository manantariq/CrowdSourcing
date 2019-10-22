/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        var promise = context.actions['enableselectorsactionid']();
        context.runningActionsByContainer['workercontainerid'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['workercontainerid'].splice(
                context.runningActionsByContainer['workercontainerid'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
