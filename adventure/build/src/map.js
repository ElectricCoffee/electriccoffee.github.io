function checkBounds(x, y, map) {
    if (x >= map.width) {
        throw new Error(`Error: ${x} is too large to fit in an array of width ${map.width}`);
    }
    else if (y >= map.height) {
        throw new Error(`Error: ${y} is too large to fit in an array of height ${map.height}`);
    }
}
export class Map {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.playArea = new Array();
        for (let h = 0; h < height; h++) {
            this.playArea.push(new Array());
            for (let w = 0; w < width; w++) {
                this.playArea[h].push(undefined);
            }
        }
    }
    /** Adds a room to the map */
    addRoom(room) {
        let { x, y } = room.position;
        checkBounds(x, y, this);
        this.playArea[x][y] = room;
        if (room.startingRoom) {
            this.currentRoom = room;
        }
    }
    /** Retreives a room in the current position */
    getRoom(x, y) {
        checkBounds(x, y, this);
        this.playArea[x][y];
    }
    static validateRoom(room) {
        if (room === undefined) {
            throw new Error("Cannot move to undefined");
        }
        return room;
    }
    /** Moves the player to the room indicated by the direction */
    move(direction) {
        let nextRoom = undefined;
        if (this.currentRoom === undefined) {
            throw new Error(`Cannot move. It is unknown which room you are currently in.`);
        }
        let { x, y } = this.currentRoom.position;
        // also covers the switch's default case
        if (!this.currentRoom.connections.includes(direction)) {
            throw new Error(`The direction "${direction}" is not a valid connection`);
        }
        // note: y increases southward, x increases eastward
        switch (direction.toLowerCase()) {
            case "north":
                nextRoom = this.playArea[x][y - 1];
                break;
            case "south":
                nextRoom = this.playArea[x][y + 1];
                break;
            case "east":
                nextRoom = this.playArea[x + 1][y];
                break;
            case "west":
                nextRoom = this.playArea[x - 1][y];
                break;
        }
        this.currentRoom = Map.validateRoom(nextRoom);
    }
}
/* TODO: add drawing function that can draw maps like these:
   where each connection direction (north, south, east, west) adds an opening between walls
╔═══╦═══╦═══╦═══╗
║   ║   ║       ║
╠═ ═╬═ ═╬═══╬═ ═╣
║               ║
╠═══╬═ ═╬═══╬═ ═╣
║       ║   ║   ║
╠═ ═╬═══╬═ ═╬═ ═╣
║   ║           ║
╚═══╩═══╩═══╩═══╝
*/ 
