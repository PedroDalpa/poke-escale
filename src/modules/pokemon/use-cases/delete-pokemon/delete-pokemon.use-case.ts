import { Injectable, Inject, NotFoundException } from '@nestjs/common'
import {
  PokemonRepository,
  POKEMON_REPOSITORY
} from '../../repositories/pokemon-repository.interface'

@Injectable()
export class DeletePokemonUseCase {
  constructor(
    @Inject(POKEMON_REPOSITORY)
    private readonly pokemonRepository: PokemonRepository
  ) {}

  async execute(id: string): Promise<void> {
    const pokemon = await this.pokemonRepository.findById(parseInt(id))

    if (!pokemon) {
      throw new NotFoundException(`Pokémon com ID "${id}" não encontrado`)
    }

    pokemon.deletedAt = new Date()

    await this.pokemonRepository.update(pokemon)

    return
  }
}
