function checkBounds(x, y, map) {
    if (x >= map.width) {
        throw new Error(`Error: ${x} is too large to fit in an array of width ${map.width}`);
    } else if (y >= map.height) {
        throw new Error(`Error: ${y} is too large to fit in an array of height ${map.height}`);
    }
}

export class Map {
    // initialise internal 2D array with null-values
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.playArea = []

        for (let h = 0; h < height; h++) {
            this.playArea[h] = []
            for (let w = 0; w < width; w++) {
                this.playArea[h][w] = null;
            }
        }
    }

    // adds a room to the map
    addRoom(room) {
        var {x, y} = room.position;
        checkBounds(x, y, this);

        this.playArea[x][y] = room;
    }

    getRoom(x, y) {
        checkBounds(x, y, this);

        this.playArea[x][y];
    }
}