'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}(); /*  AUTHOR: begolf
      *  VERSION: 1.0
      *  CREATED: 02.21.2016
      */

var _FileReader = require('./FileReader');

var _SceneLoader = require('./SceneLoader');

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

"use strict";

var Game = exports.Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        new _FileReader.FileReader(function (response) {
            // Parse JSON string into object
            Game.startGame(JSON.parse(response));
        });
    }

    _createClass(Game, null, [{
        key: 'startGame',
        value: function startGame(value) {
            Game.game = value;
            console.log("Game set to: " + Game.game.title);
            console.log('selected game is "' + Game.game.title + '"');
            document.getElementById("title").innerHTML = Game.game.title;
            new _SceneLoader.SceneLoader(Game.game);
        }
    }]);

    return Game;
}();