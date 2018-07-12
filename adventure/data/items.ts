export type ItemType = "key" | "tool" | "material";

export interface Item {
  id: number,
  kind: ItemType,
  name: string,
  description: string,
}

export const items: Item[] = [ 
  { 
    id: 0, 
    name: "wrench", 
    kind: "tool",
    description: "A large and heavy pipe wrench. Definitely heavy enough to hit with."
  }, 
  { 
    id: 1, 
    name: "small key", 
    kind: "key",
    description: "A small skeleton key that has blackened with age. I wonder what it's for."
  }
];