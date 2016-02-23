/*  AUTHOR: begolf
 *  VERSION: 1.0
 *  CREATED: 02.21.2016
 */

import {FileReader} from './FileReader';
import {SceneLoader} from './SceneLoader';

"use strict";



export class Game {
    constructor() {
        new FileReader(function(response) {
            // Parse JSON string into object
            Game.startGame(JSON.parse(response));
        });
    }

    static startGame(value) {
        Game.game = value;
        console.log("Game set to: " + Game.game.title);
        console.log('selected game is "' + Game.game.title + '"');
        document.getElementById("title").innerHTML = Game.game.title;
        new SceneLoader(Game.game);
    }
}