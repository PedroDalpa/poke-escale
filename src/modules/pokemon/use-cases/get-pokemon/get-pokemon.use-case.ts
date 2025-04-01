import { Injectable, Inject, NotFoundException } from '@nestjs/common'
import {
  PokemonRepository,
  POKEMON_REPOSITORY
} from '../../repositories/pokemon-repository.interface'
import { Pokemon } from '../../entities/pokemon.entity'

@Injectable()
export class GetPokemonUseCase {
  constructor(
    @Inject(POKEMON_REPOSITORY)
    private readonly pokemonRepository: PokemonRepository
  ) {}

  async execute(value: string): Promise<Pokemon> {
    const isNumeric = /^\d+$/.test(value)

    let pokemon: Pokemon | null

    if (isNumeric) {
      pokemon = await this.pokemonRepository.findById(parseInt(value))
    } else {
      pokemon = await this.pokemonRepository.findByName(
        value.toLocaleLowerCase()
      )
    }

    if (!pokemon) {
      throw new NotFoundException(
        `Pokémon com ${isNumeric ? 'ID' : 'nome'} "${value}" não encontrado`
      )
    }

    return pokemon
  }
}
