import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class FightingType extends Type {
  constructor() {
    super("fighting");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "normal":
      case "rock":
      case "steel":
      case "ice":
      case "dark":
        return Effectiveness.for(2);
      case "flying":
      case "poison":
      case "bug":
      case "psychic":
      case "fairy":
        return Effectiveness.for(0.5);
      case "ghost":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "flying":
      case "psychic":
      case "fairy":
        return Effectiveness.for(2);
      case "rock":
      case "bug":
      case "dark":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }
}
