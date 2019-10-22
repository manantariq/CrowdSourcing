/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['mastermaincontainerid']) {
            context.top.active('mastermaincontainerid');
            context.vms['mastermaincontainerid'].init({mask: 'masterxorcontainerid'});
        }
        if (!context.vms['campaignlistpageid']) {
            context.vms['masterxorcontainerid'].active('campaignlistpageid');
        }
        context.vms['campaignlistpageid'].init();
    };
};
