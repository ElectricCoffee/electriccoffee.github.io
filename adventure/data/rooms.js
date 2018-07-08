// was originally JSON, but apparently that's hell to statically load in JS, so now it's just JS objects ¯\_(ツ)_/¯
export const rooms = 
  [ { id: 0
    , description: [ "You wake up in a bright white room. It's tall."
                   , "There are large frosted windows up on the walls just below the ceiling, radiating a faint white light."
                   , "Looks like someone's watching you."
                   , "You see a hefty @wrench in one of the corners."
                   ]
    , items: ["wrench"]
    , position: {x: 0, y: 0}
    , connections: ["south"]
    , startingRoom: true
    , image: "rooms/image.jpg"
    }
  , { id: 1
    , description: []
    , position: {x: 0, y: 1}
    , connections: ["north", "east"]
    , image: "rooms/image.jpg"
    }
  ];

  export class Room {
    static mkHTMLDescription(room) {
      return room.description.join("<br/>");
    }
  }