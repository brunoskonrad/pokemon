import { TypeName } from "../types/type";
import { PokemonMoveInfo } from "../moves/index";

export type PokemonGender = "male" | "female" | "none";

export type PokemonMoveLearnLevel = {
  level: number;
  moveId: number;
};

export type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};

export interface BasePokemonInfo {
  id: number;
  name: string;
  primaryType: TypeName;
  secondaryType?: TypeName;
  baseStats: PokemonStats;
  learnset: PokemonMoveLearnLevel[];
  genderRatio: {
    male: number;
    female: number;
  };
  captureRate: number;
  experienceGrowth: number;
}

export interface CapturedPokemonInfo {
  id: number;
  pokemonId: number; // Links to a BasePokemonInfo
  moves: PokemonMoveInfo[];
  ivs: PokemonStats;
  evs: PokemonStats;
  gender: PokemonGender;
}
