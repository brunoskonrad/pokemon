import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class NormalType extends Type {
  constructor() {
    super("normal");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "steel":
      case "rock":
        return Effectiveness.for(0.5);
      case "ghost":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "fighting":
        return Effectiveness.for(2);
      case "ghost":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }
}
