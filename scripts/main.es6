/**
 * Created by begolf on 2/19/16.
 */

import {Game} from './Game.js';

"use strict";


class main {
    constructor() {
        console.log("Hello World.");

        document.getElementById("start-game").addEventListener("click", function () {
            new Game();
        });
    }
}

window.onload = function() {
    new main();
};