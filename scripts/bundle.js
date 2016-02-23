/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Game = __webpack_require__(1);

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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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

	var _FileReader = __webpack_require__(2);

	var _SceneLoader = __webpack_require__(3);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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

	var _Game = __webpack_require__(1);

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

/***/ }
/******/ ]);