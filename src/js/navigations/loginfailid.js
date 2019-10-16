/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['loginpageid']) {
            context.top.active('loginpageid');
            context.vms['loginpageid'].init({mask: 'loginformid'});
        }
        context.vms['loginformid'].init();
    };
};
