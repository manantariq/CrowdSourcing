/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'imageId' : data['id']
        };
        var promise = context.actions['deleteimageactionid']({filters: packet});
        context.runningActionsByContainer['imagecontainerid'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['imagecontainerid'].splice(
                context.runningActionsByContainer['imagecontainerid'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
