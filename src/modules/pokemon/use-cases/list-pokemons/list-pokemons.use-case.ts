import { Injectable, Inject } from '@nestjs/common'
import {
  PokemonRepository,
  POKEMON_REPOSITORY
} from '../../repositories/pokemon-repository.interface'
import { Pokemon } from '../../entities/pokemon.entity'

@Injectable()
export class ListPokemonsUseCase {
  constructor(
    @Inject(POKEMON_REPOSITORY)
    private readonly pokemonRepository: PokemonRepository
  ) {}

  async execute(): Promise<Pokemon[]> {
    const pokemons = await this.pokemonRepository.findAll()

    return pokemons
  }
}
