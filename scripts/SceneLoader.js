'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SceneLoader = undefined;

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

var _Game = require('./Game.js');

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

"use strict";

var SceneLoader = exports.SceneLoader = function () {
    function SceneLoader(game) {
        _classCallCheck(this, SceneLoader);

        SceneLoader.game = game;
        SceneLoader.loadScene(0);
    }

    _createClass(SceneLoader, null, [{
        key: 'loadScene',
        value: function loadScene(sceneNumber) {
            var consoleOut = document.createElement('p');
            var scene = SceneLoader.game.scene[sceneNumber];
            consoleOut.innerHTML = scene.console;
            document.getElementById("console").innerHTML = "";
            document.getElementById("console").appendChild(consoleOut);

            var buttonContainer = document.getElementById('button-container');
            while (buttonContainer.hasChildNodes()) {
                buttonContainer.removeChild(buttonContainer.lastChild);
            }
            if (scene.option.length > 0) {
                for (var i = 0; i < scene.option.length; i++) {
                    buttonContainer.appendChild(SceneLoader.createButton(scene.option[i].text, scene.option[i].action));
                }
            } else {
                buttonContainer.appendChild(SceneLoader.createButton('restart', 0));
            }
        }
    }, {
        key: 'createButton',
        value: function createButton(text, action) {
            var button = document.createElement('input');
            button.type = 'button';
            button.className = 'button';
            button.value = text;
            button.addEventListener('click', function () {
                SceneLoader.loadScene(action);
            });
            return button;
        }
    }]);

    return SceneLoader;
}();