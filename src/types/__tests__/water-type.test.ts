import {
  FireType,
  RockType,
  GroundType,
  GrassType,
  DragonType,
  SteelType,
  IceType,
  ElectricType,
  NormalType,
  FightingType,
  FlyingType,
  PoisonType,
  BugType,
  GhostType,
  PsychicType,
  DarkType,
  FairyType
} from "../type";
import WaterType from "../water-type";

import { setupTestFor } from "../__jest__/effectiveness-test-helpers";

describe("WaterType", () => {
  const subject = setupTestFor(new WaterType());

  describe(".attackEffectivenessOn", () => {
    subject.testAttackEffectivenessOn(new NormalType(), 1);
    subject.testAttackEffectivenessOn(new FightingType(), 1);
    subject.testAttackEffectivenessOn(new FlyingType(), 1);
    subject.testAttackEffectivenessOn(new PoisonType(), 1);
    subject.testAttackEffectivenessOn(new GroundType(), 2);
    subject.testAttackEffectivenessOn(new RockType(), 2);
    subject.testAttackEffectivenessOn(new BugType(), 1);
    subject.testAttackEffectivenessOn(new GhostType(), 1);
    subject.testAttackEffectivenessOn(new SteelType(), 1);
    subject.testAttackEffectivenessOn(new FireType(), 2);
    subject.testAttackEffectivenessOn(new WaterType(), 0.5);
    subject.testAttackEffectivenessOn(new GrassType(), 0.5);
    subject.testAttackEffectivenessOn(new ElectricType(), 1);
    subject.testAttackEffectivenessOn(new PsychicType(), 1);
    subject.testAttackEffectivenessOn(new IceType(), 1);
    subject.testAttackEffectivenessOn(new DragonType(), 0.5);
    subject.testAttackEffectivenessOn(new DarkType(), 1);
    subject.testAttackEffectivenessOn(new FairyType(), 1);
  });

  describe(".damageEffectivenessFrom", () => {
    subject.testDefendEffectivenessOn(new NormalType(), 1);
    subject.testDefendEffectivenessOn(new FightingType(), 1);
    subject.testDefendEffectivenessOn(new FlyingType(), 1);
    subject.testDefendEffectivenessOn(new PoisonType(), 1);
    subject.testDefendEffectivenessOn(new GroundType(), 1);
    subject.testDefendEffectivenessOn(new RockType(), 1);
    subject.testDefendEffectivenessOn(new BugType(), 1);
    subject.testDefendEffectivenessOn(new GhostType(), 1);
    subject.testDefendEffectivenessOn(new SteelType(), 0.5);
    subject.testDefendEffectivenessOn(new FireType(), 0.5);
    subject.testDefendEffectivenessOn(new WaterType(), 0.5);
    subject.testDefendEffectivenessOn(new GrassType(), 2);
    subject.testDefendEffectivenessOn(new ElectricType(), 2);
    subject.testDefendEffectivenessOn(new PsychicType(), 1);
    subject.testDefendEffectivenessOn(new IceType(), 0.5);
    subject.testDefendEffectivenessOn(new DragonType(), 1);
    subject.testDefendEffectivenessOn(new DarkType(), 1);
    subject.testDefendEffectivenessOn(new FairyType(), 1);
  });
});
