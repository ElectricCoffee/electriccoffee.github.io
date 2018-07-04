"use strict";

import {Map} from "./map.js";
import {Parser} from "./parser.js";
import {rooms} from "../rooms/rooms.js";

const map = new Map(4, 4);

// add all the rooms to the map
try {
    rooms.forEach(r => map.addRoom(r));
} catch (e) {
    alert(e);
}

/** DOM objects **/
const textbox = document.getElementById("textbox");
const exits = document.getElementById("exits");
const inputbox = document.getElementById("input-box");
const page = document.body;

/** Event Hooks **/
inputbox.addEventListener("keydown", onEnter);

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

function reloadRoom() {
    textbox.innerHTML = Parser.parseDescription(map.currentRoom.description.join("<br/>"));
    exits.innerHTML = "Possible exits are: " + map.currentRoom.connections.join(", ");
    page.style.backgroundImage = `url(${map.currentRoom.image})`;
    page.style.backgroundSize = "100%";
}

reloadRoom();