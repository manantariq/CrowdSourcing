/*jslint node: true, nomen: true */
"use strict";

exports.createNavigations = function (options) {
    return {
        'loginfailid': require('./loginfailid').createNavigation(options)
        ,'registersuccessid': require('./registersuccessid').createNavigation(options)
        ,'registereventid': require('./registereventid').createNavigation(options)
        ,'loginid': require('./loginid').createNavigation(options)
        ,'registersubmitid': require('./registersubmitid').createNavigation(options)
    };
};
