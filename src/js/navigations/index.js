/*jslint node: true, nomen: true */
"use strict";

exports.createNavigations = function (options) {
    return {
        'mastersuccessid': require('./mastersuccessid').createNavigation(options)
        ,'loginfailid': require('./loginfailid').createNavigation(options)
        ,'registersuccessid': require('./registersuccessid').createNavigation(options)
        ,'registereventid': require('./registereventid').createNavigation(options)
        ,'loginid': require('./loginid').createNavigation(options)
        ,'registersubmitid': require('./registersubmitid').createNavigation(options)
        ,'savemasterprofilesuccessid': require('./savemasterprofilesuccessid').createNavigation(options)
        ,'savecampaignsuccessid': require('./savecampaignsuccessid').createNavigation(options)
        ,'createcampaignid': require('./createcampaignid').createNavigation(options)
        ,'mastereditid': require('./mastereditid').createNavigation(options)
        ,'cancelmastereditprofileid': require('./cancelmastereditprofileid').createNavigation(options)
        ,'savemastereditprofileid': require('./savemastereditprofileid').createNavigation(options)
        ,'savecampaignid': require('./savecampaignid').createNavigation(options)
    };
};
