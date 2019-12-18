import Effectiveness, { IEffectiveness } from "../effectiveness";

export type TypeName =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy";

export class Type {
  name: TypeName;

  constructor(typeName: TypeName) {
    this.name = typeName;
  }

  attackEffectivenessOn(_type: Type): IEffectiveness {
    return Effectiveness.for(1);
  }

  defenseEffectivenessOn(_type: Type): IEffectiveness {
    return Effectiveness.for(1);
  }
}

export class FireType extends Type {
  constructor() {
    super("fire");
  }
}

export class GroundType extends Type {
  constructor() {
    super("ground");
  }
}

export class RockType extends Type {
  constructor() {
    super("rock");
  }
}

export class GrassType extends Type {
  constructor() {
    super("grass");
  }
}

export class DragonType extends Type {
  constructor() {
    super("dragon");
  }
}

export class SteelType extends Type {
  constructor() {
    super("steel");
  }
}

export class NormalType extends Type {
  constructor() {
    super("normal");
  }
}

export class FightingType extends Type {
  constructor() {
    super("fighting");
  }
}

export class FlyingType extends Type {
  constructor() {
    super("flying");
  }
}

export class PoisonType extends Type {
  constructor() {
    super("poison");
  }
}

export class BugType extends Type {
  constructor() {
    super("bug");
  }
}

export class GhostType extends Type {
  constructor() {
    super("ghost");
  }
}

export class ElectricType extends Type {
  constructor() {
    super("electric");
  }
}

export class PsychicType extends Type {
  constructor() {
    super("psychic");
  }
}

export class IceType extends Type {
  constructor() {
    super("ice");
  }
}

export class DarkType extends Type {
  constructor() {
    super("dark");
  }
}

export class FairyType extends Type {
  constructor() {
    super("fairy");
  }
}
