/*  AUTHOR: begolf
 *  VERSION: 1.0
 *  CREATED: 02.19.2016
 */

"use strict";

export class FileReader {
    constructor(callback) {
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '/text-rpg-framework/scripts/game.json', true); // Replace 'my_data' with the path to your file
        xobj.onload = function () {
            console.log("file loaded");
            callback(xobj.responseText);
        };
        xobj.send(null);
    }
}