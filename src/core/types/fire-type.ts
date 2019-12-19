import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class FireType extends Type {
  constructor() {
    super("fire");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "bug":
      case "steel":
      case "grass":
      case "ice":
        return Effectiveness.for(2);
      case "rock":
      case "fire":
      case "water":
      case "dragon":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "ground":
      case "rock":
      case "water":
        return Effectiveness.for(2);
      case "bug":
      case "steel":
      case "fire":
      case "grass":
      case "ice":
      case "fairy":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }
}
