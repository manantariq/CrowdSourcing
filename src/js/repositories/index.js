/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    var repositories = {}
    repositories['runningcampaignslist'] = require('./runningcampaignslist').createRepository(options);
    repositories['readycampaignslist'] = require('./readycampaignslist').createRepository(options);
    repositories['imagecollection'] = require('./imagecollection').createRepository(options);
    repositories['workerscollection'] = require('./workerscollection').createRepository(options);
    return repositories;
};
