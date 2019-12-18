import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class ElectricType extends Type {
  constructor() {
    super("electric");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "flying":
      case "water":
        return Effectiveness.for(2);
      case "grass":
      case "electric":
      case "dragon":
        return Effectiveness.for(0.5);
      case "ground":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "ground":
        return Effectiveness.for(2);
      case "flying":
      case "steel":
      case "electric":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }
}
