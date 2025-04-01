import { Injectable, Inject, NotFoundException } from '@nestjs/common'
import {
  PokemonRepository,
  POKEMON_REPOSITORY
} from '../../repositories/pokemon-repository.interface'
import { Pokemon } from '../../entities/pokemon.entity'
import { UpdatePokemonDto } from '@modules/pokemon/dto/update-pokemon.dto'

@Injectable()
export class UpdatePokemonUseCase {
  constructor(
    @Inject(POKEMON_REPOSITORY)
    private readonly pokemonRepository: PokemonRepository
  ) {}

  async execute(id: string, data: UpdatePokemonDto): Promise<Pokemon> {
    const existingPokemon = await this.pokemonRepository.findById(parseInt(id))

    if (!existingPokemon) {
      throw new NotFoundException(`Pokémon com ID "${id}" não encontrado`)
    }

    const pokemon: Pokemon = {
      name: data.name ?? existingPokemon.name,
      abilities: data.abilities ?? existingPokemon.abilities,
      types: data.types ?? existingPokemon.types,
      id: parseInt(id),
      sprites: {
        front: data.sprites?.front ?? existingPokemon.sprites.front,
        back: data.sprites?.back ?? existingPokemon.sprites.back
      }
    }

    await this.pokemonRepository.update(pokemon)

    return pokemon
  }
}
