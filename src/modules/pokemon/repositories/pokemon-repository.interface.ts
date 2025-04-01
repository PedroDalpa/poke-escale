import { Pokemon } from '../entities/pokemon.entity'

export interface PokemonRepository {
  create(pokemon: Pokemon): Promise<void>
  findByName(name: string): Promise<Pokemon | null>
  findAll(): Promise<Pokemon[]>
  findById(id: number): Promise<Pokemon | null>
}

export const POKEMON_REPOSITORY = 'POKEMON_REPOSITORY'
