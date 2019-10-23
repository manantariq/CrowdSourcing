/*jslint node: true, nomen: true */
"use strict";

var Promise = require('bluebird');

function Action( options ) { // add "options" parameters if needed
    // TODO: Global Initialization
    /*
    example:
    this.collection = options.repositories.mail;
    */
}
Action.prototype.run = function (parameters, solve) { // add "onCancel" parameters if needed
    // Parameters:
    // parameters['id']
    // parameters['selectionURL']

    // TODO: Execution code
    /*
    example:
    mail.find({subject: 'Re: ' + data.subject})
        .then(solve);
    */
    // THIS CAN BE REMOVED (BEGIN)
    $.notify({message: 'DisableSelectorAction'}, {allow_dismiss: true, type: 'success'});
    solve({
        event: 'disableselectorsuccessid', // success
        data: {
            'id': parameters['id'],
        }
    });
    // THIS CAN BE REMOVED (END)
};

exports.createAction = function (options) {
    var action = new Action(options);
    return function (data) {
        return new Promise(function (solve, reject, onCancel) {
            var parameters = (data && data.filters) || {};
            action.run(parameters, solve, onCancel);
        });
    };
};
