import { Type, NoType, isTypeDefined } from "./types/type";
import Effectiveness, {
  IEffectiveness,
  EffectivenessLevel
} from "./effectiveness";

export default class PokemonType {
  private primaryType: Type;
  private secondaryType: Type;

  constructor(primaryType: Type, secondaryType: Type = new NoType()) {
    this.primaryType = primaryType;

    if (primaryType.name !== secondaryType.name) {
      this.secondaryType = secondaryType;
    } else {
      this.secondaryType = new NoType();
    }
  }

  get primary(): Type {
    return this.primaryType;
  }

  get secondary(): Type {
    return this.secondaryType;
  }

  get types(): Type[] {
    return [this.primary, this.secondary].filter(isTypeDefined);
  }

  damageEffectivenessFrom(type: Type): IEffectiveness {
    const primaryEffectiveness = type.attackEffectivenessOn(this.primary);
    const secondaryEffectiveness = type.attackEffectivenessOn(this.secondary);
    const pokemonTypeEffectiveness = (primaryEffectiveness.effectivenessLevel *
      secondaryEffectiveness.effectivenessLevel) as EffectivenessLevel;

    return Effectiveness.for(pokemonTypeEffectiveness);
  }
}
