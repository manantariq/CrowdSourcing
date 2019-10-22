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
        ,'saveeditcampaignsuccessid': require('./saveeditcampaignsuccessid').createNavigation(options)
        ,'saveeditcampaignid': require('./saveeditcampaignid').createNavigation(options)
        ,'selectreadycampaignid': require('./selectreadycampaignid').createNavigation(options)
        ,'savecampaignid': require('./savecampaignid').createNavigation(options)
        ,'startcampaignsuccessid': require('./startcampaignsuccessid').createNavigation(options)
        ,'editcampaignid': require('./editcampaignid').createNavigation(options)
        ,'startcampaignid': require('./startcampaignid').createNavigation(options)
        ,'imageuploadsuccessid': require('./imageuploadsuccessid').createNavigation(options)
        ,'deleteimagesuccessid': require('./deleteimagesuccessid').createNavigation(options)
        ,'d906a46a-51f7-4dfd-9306-dd1db66c85f8': require('./d906a46a-51f7-4dfd-9306-dd1db66c85f8').createNavigation(options)
        ,'f577d810-1532-4a0f-8e2e-8217d09383fd': require('./f577d810-1532-4a0f-8e2e-8217d09383fd').createNavigation(options)
        ,'enableselectorsuccessid': require('./enableselectorsuccessid').createNavigation(options)
        ,'disableselectorsuccessid': require('./disableselectorsuccessid').createNavigation(options)
        ,'uploadimageid': require('./uploadimageid').createNavigation(options)
        ,'deleteimageid': require('./deleteimageid').createNavigation(options)
        ,'workerselectedid': require('./workerselectedid').createNavigation(options)
        ,'enableselectorid': require('./enableselectorid').createNavigation(options)
        ,'disableselectorid': require('./disableselectorid').createNavigation(options)
        ,'enableannotatorid': require('./enableannotatorid').createNavigation(options)
        ,'disableannotatorid': require('./disableannotatorid').createNavigation(options)
    };
};
