/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'fullname' : data['Full Name']
            ,'password' : data['Password']
            ,'type' : data['Type']
            ,'username' : data['Username']
        };
        var promise = context.actions['registeractionid']({filters: packet});
        context.runningActionsByContainer['registerpageid'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['registerpageid'].splice(
                context.runningActionsByContainer['registerpageid'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
