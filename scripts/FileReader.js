/*  AUTHOR: begolf
 *  VERSION: 1.0
 *  CREATED: 02.19.2016
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var FileReader = exports.FileReader = function FileReader(callback) {
    _classCallCheck(this, FileReader);

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '/text-rpg-framework/scripts/game.json', true); // Replace 'my_data' with the path to your file
    xobj.onload = function () {
        console.log("file loaded");
        callback(xobj.responseText);
    };
    xobj.send(null);
};