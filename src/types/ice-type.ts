import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class IceType extends Type {
  constructor() {
    super("ice");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "flying":
      case "ground":
      case "grass":
      case "dragon":
        return Effectiveness.for(2);
      case "steel":
      case "fire":
      case "water":
      case "ice":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "fighting":
      case "rock":
      case "steel":
      case "fire":
        return Effectiveness.for(2);
      case "ice":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }
}
