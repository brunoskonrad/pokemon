import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class FairyType extends Type {
  constructor() {
    super("fairy");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "fighting":
      case "dragon":
      case "dark":
        return Effectiveness.for(2);
      case "poison":
      case "steel":
      case "fire":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "poison":
      case "steel":
        return Effectiveness.for(2);
      case "fighting":
      case "bug":
      case "dark":
        return Effectiveness.for(0.5);
      case "dragon":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }
}
