/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['registerpageid']) {
            context.top.active('registerpageid');
            context.vms['registerpageid'].init({mask: 'registerformid'});
        }
        context.vms['registerformid'].init();
    };
};
