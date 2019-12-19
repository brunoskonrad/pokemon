import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class PoisonType extends Type {
  constructor() {
    super("poison");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "grass":
      case "fairy":
        return Effectiveness.for(2);
      case "poison":
      case "ground":
      case "rock":
      case "ghost":
        return Effectiveness.for(0.5);
      case "steel":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "ground":
      case "psychic":
        return Effectiveness.for(2);
      case "fighting":
      case "poison":
      case "bug":
      case "grass":
      case "fairy":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }
}
