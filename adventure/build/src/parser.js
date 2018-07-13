export var Parser;
(function (Parser) {
    function parseInput(str, actions) {
        let tokens = str.split(/\s/).filter(s => s != "").map(s => s.trim());
        let command = tokens.shift(); // pops the 1st item
        if (command == undefined) {
            throw new Error(`There was no command in the tokens array`);
        }
        if (!(command in actions)) {
            throw new Error(`Did not understand the command "${command}"`);
        }
        // return the function in the actions object with the remaining tokens as its arguments
        // it's not the responsibility of the parser to call the code, but the caller of the parser
        // thus a thunk is returned.
        return () => actions[command](tokens);
    }
    Parser.parseInput = parseInput;
    /** Parses a description, replacing all ocurrences of @ with <span> tags */
    function parseDescription(desc) {
        return desc.replace(/@(\w+)/gi, '<span class="item">$1</span>');
    }
    Parser.parseDescription = parseDescription;
})(Parser || (Parser = {}));
