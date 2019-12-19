import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class BugType extends Type {
  constructor() {
    super("bug");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "grass":
      case "psychic":
      case "dark":
        return Effectiveness.for(2);
      case "fighting":
      case "flying":
      case "poison":
      case "ghost":
      case "steel":
      case "fire":
      case "fairy":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "flying":
      case "rock":
      case "fire":
        return Effectiveness.for(2);
      case "fighting":
      case "ground":
      case "grass":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }
}
