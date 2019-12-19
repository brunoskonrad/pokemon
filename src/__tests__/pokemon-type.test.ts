import PokemonType from "../pokemon-type";

import NormalType from "../types/normal-type";
import ElectricType from "../types/electric-type";
import RockType from "../types/rock-type";
import GroundType from "../types/ground-type";
import WaterType from "../types/water-type";
import IceType from "../types/ice-type";
import GrassType from "../types/grass-type";
import FlyingType from "../types/flying-type";

describe("PokemonType", () => {
  describe(".primary", () => {
    it("returns its primary type", () => {
      const subject = new PokemonType(new NormalType());

      expect(subject.primary.name).toBe("normal");
    });
  });

  describe(".secondary", () => {
    it("returns its secondary type if defined", () => {
      const subject = new PokemonType(new NormalType(), new ElectricType());

      expect(subject.secondary.name).toBe("electric");
    });

    it("returns NoType if secondary type not defined", () => {
      const subject = new PokemonType(new NormalType());

      expect(subject.secondary.name).toBe("none");
    });
  });

  describe("if secondary type is the same as primary", () => {
    it("keeps pokémon type with only primary defined", () => {
      const subject = new PokemonType(new NormalType(), new NormalType());

      expect(subject.primary.name).not.toEqual(subject.secondary.name);
    });
  });

  describe(".types", () => {
    it("returns one item if only one is defined", () => {
      const subject = new PokemonType(new NormalType());

      expect(subject.types).toHaveLength(1);
    });

    it("returns two item if pokémon has two types", () => {
      const subject = new PokemonType(new NormalType(), new ElectricType());

      expect(subject.types).toHaveLength(2);
    });
  });

  describe(".damageEffectivenessFrom", () => {
    describe("when pokémon has two types", () => {
      it('returns "4" when both types are weak against move type', () => {
        const subject = new PokemonType(new RockType(), new GroundType());
        const moveType = new WaterType();

        expect(
          subject.damageEffectivenessFrom(moveType).effectivenessLevel
        ).toEqual(4);
      });

      it('returns "2" if one of the types is weak against move type', () => {
        const subject = new PokemonType(new RockType(), new IceType());
        const moveType = new WaterType();

        expect(
          subject.damageEffectivenessFrom(moveType).effectivenessLevel
        ).toEqual(2);
      });

      it('returns "1" when both types are neutral against move type', () => {
        const subject = new PokemonType(new FlyingType(), new IceType());
        const moveType = new WaterType();

        expect(
          subject.damageEffectivenessFrom(moveType).effectivenessLevel
        ).toEqual(1);
      });

      it('returns "0.5" if one of the types is strong against move type', () => {
        const subject = new PokemonType(new GrassType(), new IceType());
        const moveType = new WaterType();

        expect(
          subject.damageEffectivenessFrom(moveType).effectivenessLevel
        ).toEqual(0.5);
      });

      it('returns "0.25" when both types are strong against move type', () => {
        const subject = new PokemonType(new GrassType(), new WaterType());
        const moveType = new WaterType();

        expect(
          subject.damageEffectivenessFrom(moveType).effectivenessLevel
        ).toEqual(0.25);
      });
    });
  });
});
