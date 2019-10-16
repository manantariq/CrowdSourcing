/*jslint node: true, nomen: true */
"use strict";

exports.createNavigations = function (options) {
    return {
        'registersubmitid': require('./registersubmitid').createNavigation(options)
        ,'registersuccessid': require('./registersuccessid').createNavigation(options)
        ,'registereventid': require('./registereventid').createNavigation(options)
        ,'loginid': require('./loginid').createNavigation(options)
        ,'loginfailid': require('./loginfailid').createNavigation(options)
    };
};
