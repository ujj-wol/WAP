/*jshint esversion: 6 */

(function () {
    "use strict";

    //this code allows and works fine even if we change animation type while the previous animation is running.
    let textboxElement;
    let start;
    let stop;
    let animationElement;
    let sizeElement;
    let speedUp;
    let animationInterval = 250;
    let myTimer;
    let animationStarted = null;
    let originalText;
    let frames;
    let i = 0;

    //we also never disable animation button
    function enableAndDisableItems() {
        if (animationStarted === null) {
            document.getElementById("stop").disabled = true;
            document.getElementById("start").disabled = false;
        } else {
            document.getElementById("start").disabled = true;
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
            changeAnimate();
        }
    }

    function changeAnimate() {
        myTimer = setInterval(function () {
            if (i === frames.length) {
                i = 0;
            }
            textboxElement.value = frames[i++];
        }, animationInterval);
    }

    function handleStop() {
        clearInterval(myTimer);
        animationStarted = null;
        enableAndDisableItems();
        textboxElement.value = originalText;
    }

    function displayText() {
        originalText = ANIMATIONS[animationElement.value];
        if (animationStarted === null)
            textboxElement.value = originalText;

        frames = originalText.split("=====\n");
        i = 0;
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