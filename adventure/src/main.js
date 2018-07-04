"use strict";

console.log("I see you're snooping around in my code, how dare you!");
console.log("Well, since you're here, please leave me some feedback on the code");
console.log("You can also fork it on github! @ github.com/ElectricCoffee/electriccoffee.github.io");

import {Map} from "./map.js";
import {Parser} from "./parser.js";
import {rooms} from "../data/rooms.js";

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

/** Possible actions the user may perform 
 *  It's meant as a dictionary that maps strings to functions that take a list of strings
 *  In C# types this would be a Dictionary<string, Action<List<string>>>
*/
const actions = {
    help: _ => alert("This is a test"),
    go: x => {map.move(x[0]); reloadRoom()},
    move: x => {map.move(x[0]); reloadRoom()},
};

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
    let input = inputbox.value;
    
    try {
        let action = Parser.parseInput(input, actions);
        action();
    } catch (e) {
        alert(e);
    } finally {
        inputbox.value = "";
    }
}

function reloadRoom() {
    page.style.backgroundImage = `url(${map.currentRoom.image})`;
    page.style.backgroundSize = "100%";
    textbox.innerHTML = Parser.parseDescription(map.currentRoom.description.join("<br/>"));
    exits.innerHTML = "Possible exits are: " + map.currentRoom.connections.join(", ");
}

reloadRoom();