/*jshint esversion: 6 */

(function () {
    "use strict";

    let textboxElement;
    let start;
    let stop;
    let animationElement;
    let sizeElement;
    let speedUp;
    let originalText;
    let animationInterval = 250;
    let myTimer;
    let animationStarted = null;

    function enableAndDisableItems() {
        if (animationStarted === null) {
            document.getElementById("stop").disabled = true;
            document.getElementById("start").disabled = false;
            animationElement.disabled = false;
        } else {
            document.getElementById("start").disabled = true;
            animationElement.disabled = true;
            document.getElementById("stop").disabled = false;
        }
    }

    function handleTurbo() {
        if (speedUp.checked) {
            animationInterval = 50;
        } else {
            animationInterval = 250;
        }
        if (animationStarted !== null) {
            clearInterval(myTimer);
            animationStarted = null;
            handleStart();
        }
    }

    function handleStart() {
        if (animationStarted === null) {
            animationStarted = true;
            enableAndDisableItems();
            originalText = ANIMATIONS[animationElement.value];
            var frames = originalText.split("=====\n");
            var i = 0;
            myTimer = setInterval(function () {
                if (i === frames.length) {
                    i = 0;
                }
                textboxElement.value = frames[i++];
            }, animationInterval);
        }
    }

    function handleStop() {
        clearInterval(myTimer);
        animationStarted = null;
        enableAndDisableItems();
        textboxElement.value = originalText;
    }

    function displayText() {
        textboxElement.value = ANIMATIONS[animationElement.value];
    }

    function changeFontSize() {
        textboxElement.style.fontSize = sizeElement.value; //parseInt(sizeElement.value) + "pt";
    }

    function initialize() {
        textboxElement = document.getElementById("textbox");
        //textboxElement = document.getElementsByTagName("textarea")[0];

        start = document.getElementById("start");
        start.onclick = handleStart;

        stop = document.getElementById("stop");
        stop.onclick = handleStop;

        animationElement = document.getElementById("animation");
        animationElement.onchange = displayText;

        sizeElement = document.getElementById("size");
        sizeElement.onchange = changeFontSize;

        speedUp = document.getElementById("turbo");
        speedUp.onchange = handleTurbo;

        //disable some buttons at start
        enableAndDisableItems();
    }

    window.onload = initialize;
})();