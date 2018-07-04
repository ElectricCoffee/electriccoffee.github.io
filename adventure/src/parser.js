export class Parser {
    static parseInput(str) {
        let tokens = str.split(/\s/).filter(s => s != "").map(s => s.trim());


        switch (tokens[0].toLowerCase()) {
            case "help":
                break;
            case "go":
            case "move":
                // figure out what to do here;
                break;
            case "look":
                if (tokens.length > 1) {
                    // figure out what to do here
                }

                // and here
                break;
            default: 
                throw new Error(`Did not understand command ${tokens[0]}`);
        }
    }

    /** Parses a description, replacing all ocurrences of @ with <span> tags */
    static parseDescription(desc) {
        return desc.replace(/@(\w+)/gi, '<span class="item">$1</span>');
    }
}