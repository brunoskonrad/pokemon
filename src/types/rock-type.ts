import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class RockType extends Type {
  constructor() {
    super("rock");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "flying":
      case "bug":
      case "fire":
      case "ice":
        return Effectiveness.for(2);
      case "fighting":
      case "ground":
      case "steel":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "fighting":
      case "ground":
      case "steel":
      case "water":
      case "grass":
        return Effectiveness.for(2);
      case "normal":
      case "flying":
      case "poison":
      case "fire":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }
}
