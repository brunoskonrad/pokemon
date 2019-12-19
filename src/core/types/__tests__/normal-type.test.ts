import NormalType from "../normal-type";
import FightingType from "../fighting-type";
import FlyingType from "../flying-type";
import PoisonType from "../poison-type";
import GroundType from "../ground-type";
import RockType from "../rock-type";
import BugType from "../bug-type";
import GhostType from "../ghost-type";
import SteelType from "../steel-type";
import FireType from "../fire-type";
import WaterType from "../water-type";
import GrassType from "../grass-type";
import ElectricType from "../electric-type";
import PsychicType from "../psychic-type";
import IceType from "../ice-type";
import DragonType from "../dragon-type";
import FairyType from "../fairy-type";
import DarkType from "../dark-type";

import { setupTestFor } from "../__jest__/effectiveness-test-helpers";

describe("NormalType", () => {
  const subject = setupTestFor(new NormalType());

  describe(".attackEffectivenessOn", () => {
    subject.testAttackEffectivenessOn(new NormalType(), 1);
    subject.testAttackEffectivenessOn(new FightingType(), 1);
    subject.testAttackEffectivenessOn(new FlyingType(), 1);
    subject.testAttackEffectivenessOn(new PoisonType(), 1);
    subject.testAttackEffectivenessOn(new GroundType(), 1);
    subject.testAttackEffectivenessOn(new RockType(), 0.5);
    subject.testAttackEffectivenessOn(new BugType(), 1);
    subject.testAttackEffectivenessOn(new GhostType(), 0);
    subject.testAttackEffectivenessOn(new SteelType(), 0.5);
    subject.testAttackEffectivenessOn(new FireType(), 1);
    subject.testAttackEffectivenessOn(new WaterType(), 1);
    subject.testAttackEffectivenessOn(new GrassType(), 1);
    subject.testAttackEffectivenessOn(new ElectricType(), 1);
    subject.testAttackEffectivenessOn(new PsychicType(), 1);
    subject.testAttackEffectivenessOn(new IceType(), 1);
    subject.testAttackEffectivenessOn(new DragonType(), 1);
    subject.testAttackEffectivenessOn(new DarkType(), 1);
    subject.testAttackEffectivenessOn(new FairyType(), 1);
  });

  describe(".defenseEffectivenessOn", () => {
    subject.testDefendEffectivenessOn(new NormalType(), 1);
    subject.testDefendEffectivenessOn(new FightingType(), 2);
    subject.testDefendEffectivenessOn(new FlyingType(), 1);
    subject.testDefendEffectivenessOn(new PoisonType(), 1);
    subject.testDefendEffectivenessOn(new GroundType(), 1);
    subject.testDefendEffectivenessOn(new RockType(), 1);
    subject.testDefendEffectivenessOn(new BugType(), 1);
    subject.testDefendEffectivenessOn(new GhostType(), 0);
    subject.testDefendEffectivenessOn(new SteelType(), 1);
    subject.testDefendEffectivenessOn(new FireType(), 1);
    subject.testDefendEffectivenessOn(new WaterType(), 1);
    subject.testDefendEffectivenessOn(new GrassType(), 1);
    subject.testDefendEffectivenessOn(new ElectricType(), 1);
    subject.testDefendEffectivenessOn(new PsychicType(), 1);
    subject.testDefendEffectivenessOn(new IceType(), 1);
    subject.testDefendEffectivenessOn(new DragonType(), 1);
    subject.testDefendEffectivenessOn(new DarkType(), 1);
    subject.testDefendEffectivenessOn(new FairyType(), 1);
  });
});
