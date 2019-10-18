/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['mastermaincontainerid']) {
            context.top.active('mastermaincontainerid');
            context.vms['mastermaincontainerid'].init({mask: 'masterxorcontainerid'});
        }
        if (!context.vms['masterprofileid']) {
            context.vms['masterxorcontainerid'].active('masterprofileid');
            context.vms['masterprofileid'].init({mask: 'masterprofileformid'});
        }
        context.vms['masterprofileformid'].init();
    };
};
