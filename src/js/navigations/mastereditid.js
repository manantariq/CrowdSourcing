/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['mastermaincontainerid']) {
            context.top.active('mastermaincontainerid');
            context.vms['mastermaincontainerid'].init({mask: 'masterxorcontainerid'});
        }
        if (!context.vms['mastereditprofileid']) {
            context.vms['masterxorcontainerid'].active('mastereditprofileid');
            context.vms['mastereditprofileid'].init({mask: 'mastereditprofileformid'});
        }
        data = data || {};
        var packet = {
            'Full Name' : data['Full Name']
            ,'Type' : data['Type']
            ,'Username' : data['Username']
        };
        context.vms['mastereditprofileformid'].init({input: packet});
    };
};
