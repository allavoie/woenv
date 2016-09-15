#!/usr/bin/env node
/**
 * Copyright (c) 2014 .... All rights reserved.
 * Copyright (c) 2014 .... All rights reserved.
 *
 * ? -- ? for your command line.
 *
 * See <https://github.com/?/?> and <https://?.com/package/>
 */

var VERSION = '9.0.4';

var p = console.warn;
var util = require('util');
var path = require('path');
var fs = require('fs');
const commandLineArgs = require('command-line-args');
const commandLineSchema = [
    { name: 'verbose', alias: 'v', type: Boolean}
];


//--- exports for module usage

exports.getVersion = getVersion;

//---- globals and constants

//---- support functions

function getVersion() {
    return VERSION;
}

function parseArgv(argv) {
    var parsed = {
        args: [],
        help: false,
        quiet: false
    };
}
console.log('done...');

