/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
strict:true, undef:true, unused:true, curly:true, browser:true, white:true,
moz:true, esnext:false, indent:2, maxerr:50, devel:true, node:true, boss:true,
globalstrict:true, nomen:false, newcap:false */

'use strict';

var prefs = require('sdk/simple-prefs');
var tabs = require('sdk/tabs');
var { viewFor } = require('sdk/view/core');

function logReady(tab) {
  var lowLevelTab = viewFor(tab);
  // console.log('progress:', lowLevelTab.getAttribute('progress'));
  lowLevelTab.removeAttribute('busy');
}

exports.main = function () {
  tabs.on('ready', logReady);
};

exports.onUnload = function () {
  // tabs.off('ready', logReady);
};