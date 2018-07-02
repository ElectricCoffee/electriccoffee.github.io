"use strict";

import {Map} from "./map.js";
import {rooms} from "./rooms.js"

const map = new Map(4, 4);

/** DOM objects **/
const textbox = document.getElementById("textbox");
const inputbox = document.getElementById("input-box");
const goButton = document.getElementById("go-btn");
const page = document.body;

/** Event Hooks **/
inputbox.addEventListener("keydown", onEnter);
goButton.addEventListener("mousedown", readEvalPrint);

textbox.innerHTML = "Testing 123";
page.style.backgroundImage = "url(image.jpg)";
page.style.backgroundSize = "100%";

/** Event Handlers **/
function onEnter(event) {
    if (event.key === "Enter") {
        readEvalPrint();
    }
}

/** Other Functions **/
function readEvalPrint() {
    textbox.innerHTML = inputbox.value;
    inputbox.value = "";
}