import { Type } from "./type";
import Effectiveness, { IEffectiveness } from "../effectiveness";

export default class WaterType extends Type {
  constructor() {
    super("water");
  }

  attackEffectivenessOn(type: Type): IEffectiveness {
    switch (type.name) {
      case "fire":
      case "rock":
      case "ground":
        return Effectiveness.for(2);
      case "water":
      case "grass":
      case "dragon":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type): IEffectiveness {
    switch (type.name) {
      case "electric":
      case "grass":
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
}
