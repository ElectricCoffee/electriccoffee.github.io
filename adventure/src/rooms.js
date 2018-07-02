// was originally JSON, but apparently that's hell to statically load in JS, so now it's just JS objects ¯\_(ツ)_/¯
export const rooms = 
  [ { id: 0
    , description: "You wake up in a bright white room. It's tall.\nThere are large frosted windows up above."
    , items: ["wrench"]
    , position: {x: 0, y: 0}
    , connections: ["south"]
    , startingRoom: true
    }
  , { id: 1
    , description: ""
    , position: {x: 0, y: 1}
    , connections: ["north", "east"]
    }
  ];