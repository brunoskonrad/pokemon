import { Type } from "./type";
import Effectiveness, { IEffectiveness } from "../effectiveness";

export default class FlyingType extends Type {
  constructor() {
    super("flying");
  }

  attackEffectivenessOn(type: Type): IEffectiveness {
    switch (type.name) {
      case "fighting":
      case "bug":
      case "grass":
        return Effectiveness.for(2);
      case "rock":
      case "steel":
      case "electric":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type): IEffectiveness {
    switch (type.name) {
      case "rock":
      case "electric":
      case "ice":
        return Effectiveness.for(2);
      case "fighting":
      case "bug":
      case "grass":
        return Effectiveness.for(0.5);
      case "ground":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }
}
