import { calculateBaseDamage } from "../damage-calculation";

// https://bulbapedia.bulbagarden.net/wiki/Damage#Damage_formula

describe("Damage Calculation", () => {
  describe("calculateBaseDamage ", () => {
    test("calculates base damage when attack stat is higher than defense stat", () => {
      expect(
        calculateBaseDamage({
          attackingPokemonLevel: 20,
          attackingPokemonAttackStat: 60,
          defendingPokemonDefenseStat: 40,
          movePower: 60
        })
      ).toEqual(20);
    });

    test("calculates base damage when attack stat is equal as defense stat", () => {
      expect(
        calculateBaseDamage({
          attackingPokemonLevel: 20,
          attackingPokemonAttackStat: 60,
          defendingPokemonDefenseStat: 60,
          movePower: 60
        })
      ).toEqual(14);
    });

    test("calculates base damage when attack stat is lower than defense stat", () => {
      expect(
        calculateBaseDamage({
          attackingPokemonLevel: 20,
          attackingPokemonAttackStat: 60,
          defendingPokemonDefenseStat: 80,
          movePower: 60
        })
      ).toEqual(11);
    });
  });
});
