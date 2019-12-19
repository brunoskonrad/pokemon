import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class GhostType extends Type {
  constructor() {
    super("ghost");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "ghost":
      case "psychic":
        return Effectiveness.for(2);
      case "dark":
        return Effectiveness.for(0.5);
      case "normal":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "ghost":
      case "dark":
        return Effectiveness.for(2);
      case "poison":
      case "bug":
        return Effectiveness.for(0.5);
      case "normal":
      case "fighting":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }
}
