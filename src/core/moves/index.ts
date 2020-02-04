import { TypeName } from "../types/type";

export type MoveCategory = "physical" | "special" | "status";
export type MoveContestRank =
  | "tough"
  | "cute"
  | "cool"
  | "clever"
  | "beautiful";

export interface MoveInfo {
  id: number;
  name: string;
  type: TypeName;
  category: MoveCategory;
  contest?: MoveContestRank;
  powerPoints: number;
  power: number;
  accuracy: number; // 0 ~ 1
  priorityMove: number;
  description: string;
}

export interface PokemonMoveInfo {
  moveId: number;
  totalPowerPoints: number;
  powerPoints: number;
}
