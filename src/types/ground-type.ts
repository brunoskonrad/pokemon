import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class GroundType extends Type {
  constructor() {
    super("ground");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "poison":
      case "rock":
      case "steel":
      case "fire":
      case "electric":
        return Effectiveness.for(2);
      case "bug":
      case "grass":
        return Effectiveness.for(0.5);
      case "flying":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "water":
      case "grass":
      case "ice":
        return Effectiveness.for(2);
      case "poison":
      case "rock":
        return Effectiveness.for(0.5);
      case "electric":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }
}
