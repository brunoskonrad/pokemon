interface DamageAttributes {
  attackingPokemonLevel: number;
  attackingPokemonAttackStat: number;
  defendingPokemonDefenseStat: number;
  movePower: number;
}

export function calculateBaseDamage({
  attackingPokemonLevel,
  attackingPokemonAttackStat,
  defendingPokemonDefenseStat,
  movePower
}: DamageAttributes) {
  const levelFactor = (2 * attackingPokemonLevel) / 5 + 2;

  return (
    (levelFactor *
      movePower *
      (attackingPokemonAttackStat / defendingPokemonDefenseStat)) /
      50 +
    2
  );
}
