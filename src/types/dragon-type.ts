import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class DragonType extends Type {
  constructor() {
    super("dragon");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "dragon":
        return Effectiveness.for(2);
      case "steel":
        return Effectiveness.for(0.5);
      case "fairy":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "ice":
      case "dragon":
      case "fairy":
        return Effectiveness.for(2);
      case "fire":
      case "water":
      case "grass":
      case "electric":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }
}
