export class UpdatePokemonDto {
  name?: string
  abilities?: string[]
  types?: string[]
  sprites?: { front?: string; back?: string }
}
