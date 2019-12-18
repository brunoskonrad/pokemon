import { Type } from "./type";
import Effectiveness from "../effectiveness";

export default class DarkType extends Type {
  constructor() {
    super("dark");
  }

  attackEffectivenessOn(type: Type) {
    switch (type.name) {
      case "ghost":
      case "psychic":
        return Effectiveness.for(2);
      case "fighting":
      case "dark":
      case "fairy":
        return Effectiveness.for(0.5);
      default:
        return Effectiveness.for(1);
    }
  }

  defenseEffectivenessOn(type: Type) {
    switch (type.name) {
      case "fighting":
      case "bug":
      case "fairy":
        return Effectiveness.for(2);
      case "ghost":
      case "dark":
        return Effectiveness.for(0.5);
      case "psychic":
        return Effectiveness.for(0);
      default:
        return Effectiveness.for(1);
    }
  }
}
