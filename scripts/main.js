"use strict";

var _Game = require("./Game.js");

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
} /**
   * Created by begolf on 2/19/16.
   */

"use strict";

var main = function main() {
    _classCallCheck(this, main);

    console.log("Hello World.");

    document.getElementById("start-game").addEventListener("click", function () {
        new _Game.Game();
    });
};

window.onload = function () {
    new main();
};