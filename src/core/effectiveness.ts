export type EffectivenessLevel = 0 | 0.25 | 0.5 | 1 | 2 | 4;

export interface IEffectiveness {
  name: string;
  effectivenessLevel: EffectivenessLevel;
}

export default class Effectiveness {
  static for(effectivenessLevel: EffectivenessLevel): IEffectiveness {
    if (effectivenessLevel === 0) {
      return new NotEffective();
    }

    const normalizedLevel = Math.min(Math.max(effectivenessLevel, 0.25), 4);

    switch (normalizedLevel) {
      case 0.25:
        return new NotSuperEffective();
      case 0.5:
        return new NotVeryEffective();
      case 1:
        return new RegularEffective();
      case 2:
        return new VeryEffective();
      case 4:
        return new SuperEffective();
      default:
        return new RegularEffective();
    }
  }
}

export class NotEffective implements IEffectiveness {
  name = "not effective";
  effectivenessLevel: EffectivenessLevel = 0;
}

export class RegularEffective implements IEffectiveness {
  name = "effective";
  effectivenessLevel: EffectivenessLevel = 1;
}

export class VeryEffective implements IEffectiveness {
  name = "very effective";
  effectivenessLevel: EffectivenessLevel = 2;
}

export class SuperEffective implements IEffectiveness {
  name = "super effective";
  effectivenessLevel: EffectivenessLevel = 4;
}

export class NotVeryEffective implements IEffectiveness {
  name = "not very effective";
  effectivenessLevel: EffectivenessLevel = 0.5;
}

export class NotSuperEffective implements IEffectiveness {
  name = "not super effective";
  effectivenessLevel: EffectivenessLevel = 0.25;
}
