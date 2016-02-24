/*  AUTHOR: begolf
 *  VERSION: 1.0
 *  CREATED: 02.21.2016
 */

"use strict";



export class SceneLoader {
    constructor(game) {
        SceneLoader.game = game;
        SceneLoader.loadScene(0);
    }

    static loadScene(sceneNumber) {
        let consoleOut = document.createElement('p');
        let scene = SceneLoader.game.scene[sceneNumber];
        consoleOut.innerHTML = scene.console;
        document.getElementById("console").innerHTML = "";
        document.getElementById("console").appendChild(consoleOut);

        let buttonContainer = document.getElementById('button-container');
        while (buttonContainer.hasChildNodes()) {
            buttonContainer.removeChild(buttonContainer.lastChild);
        }
        if (scene.option.length > 0) {
            for (let i = 0; i < scene.option.length; i++) {
                buttonContainer.appendChild(SceneLoader.createButton(
                    scene.option[i].text,
                    scene.option[i].action));
            }
        } else {
            buttonContainer.appendChild(SceneLoader.createButton(
                'restart',
                0));
        }
    }

    static createButton(text, action) {
        let button = document.createElement('input');
        button.type = 'button';
        button.className = 'button';
        button.value = text;
        button.addEventListener('click', function () {
            SceneLoader.loadScene(action);
        });
        return button;
    }
}