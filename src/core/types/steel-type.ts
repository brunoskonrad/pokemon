import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class SteelType extends Type {
  constructor() {
    super("steel");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "rock":
      case "ice":
      case "fairy":
        return Effectiveness.for(2);
      case "steel":
      case "fire":
      case "water":
      case "electric":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "fighting":
      case "ground":
      case "fire":
        return Effectiveness.for(2);
      case "normal":
      case "flying":
      case "rock":
      case "bug":
      case "steel":
      case "grass":
      case "psychic":
      case "ice":
      case "dragon":
      case "fairy":
        return Effectiveness.for(0.5);
      case "poison":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }
}
