import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class PsychicType extends Type {
  constructor() {
    super("psychic");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "fighting":
      case "poison":
        return Effectiveness.for(2);
      case "steel":
      case "psychic":
        return Effectiveness.for(0.5);
      case "dark":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "bug":
      case "ghost":
      case "dark":
        return Effectiveness.for(2);
      case "fighting":
      case "psychic":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }
}
