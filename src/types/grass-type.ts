import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class GrassType extends Type {
  constructor() {
    super("grass");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "ground":
      case "rock":
      case "water":
        return Effectiveness.for(2);
      case "flying":
      case "poison":
      case "bug":
      case "steel":
      case "fire":
      case "grass":
      case "dragon":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "flying":
      case "poison":
      case "bug":
      case "fire":
      case "ice":
        return Effectiveness.for(2);
      case "ground":
      case "water":
      case "grass":
      case "electric":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }
}
