export const rooms: Room[] = [ 
  { 
    id: 0, 
    description: [ 
      "You wake up in a bright white room. It's tall.",
      "There are large frosted windows up on the walls just below the ceiling, radiating a faint white light.",
      "Looks like someone's watching you.",
      "You see a hefty @wrench in one of the corners."
    ],
    items: ["wrench"],
    position: {x: 0, y: 0},
    connections: ["south"],
    startingRoom: true,
    image: "rooms/image.jpg"
  },
  { 
    id: 1,
    description: "No description currently available",
    position: {x: 0, y: 1},
    connections: ["north", "east"],
    image: "rooms/image.jpg"
  }
];

export type Direction = "north" | "south" | "east" | "west";

export interface Room {
  id: number,
  description: string | string[],
  items?: string[],
  position: {x: number, y: number},
  connections: Direction[],
  startingRoom?: boolean,
  image: string
}

export namespace Room {
  export function mkHTMLDescription({description}: Room) {
    if (Array.isArray(description)) {
      return description.join("<br/>");
    } else {
      return description
    }
  }
}