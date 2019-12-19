import Effectiveness, { IEffectiveness } from "../effectiveness";

export type TypeName =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "none";

export class Type {
  name: TypeName;

  constructor(typeName: TypeName) {
    this.name = typeName;
  }

  attackEffectivenessOn(_type: Type): IEffectiveness {
    return Effectiveness.for(1);
  }

  defenseEffectivenessOn(_type: Type): IEffectiveness {
    return Effectiveness.for(1);
  }
}

export class NoType extends Type {
  constructor() {
    super("none");
  }
}

export function isTypeDefined(type: Type) {
  return type.name !== "none";
}
