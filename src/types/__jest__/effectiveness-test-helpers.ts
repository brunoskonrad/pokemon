import { Type } from "../type";
import { EffectivenessLevel } from "../../effectiveness";

export function testAttackEffectivenessOn(
  attacker: Type,
  defender: Type,
  effectivenessLevel: EffectivenessLevel
) {
  it(`returns "${effectivenessLevel}" when "${attacker.name}" attacks "${defender.name}"`, () => {
    expect(attacker.attackEffectivenessOn(defender).effectivenessLevel).toEqual(
      effectivenessLevel
    );
  });
}

export function testDefendEffectivenessOn(
  defender: Type,
  attacker: Type,
  effectivenessLevel: EffectivenessLevel
) {
  it(`returns "${effectivenessLevel}" when "${defender.name}" is defending from "${attacker.name}"`, () => {
    expect(
      defender.defenseEffectivenessOn(attacker).effectivenessLevel
    ).toEqual(effectivenessLevel);
  });
}

export function setupTestFor(subject: Type) {
  return {
    testAttackEffectivenessOn(
      defender: Type,
      effectivenessLevel: EffectivenessLevel
    ) {
      testAttackEffectivenessOn(subject, defender, effectivenessLevel);
    },
    testDefendEffectivenessOn(
      attacker: Type,
      effectivenessLevel: EffectivenessLevel
    ) {
      testDefendEffectivenessOn(subject, attacker, effectivenessLevel);
    }
  };
}
