import { Injectable, Inject } from '@nestjs/common'
import {
  PokemonRepository,
  POKEMON_REPOSITORY
} from '../../repositories/pokemon-repository.interface'
import { Pokemon } from '../../entities/pokemon.entity'
import {
  POKE_API,
  PokeApiService
} from '@infra/external/pokemonAPI/pokeApi.interface'

@Injectable()
export class CreatePokemonUseCase {
  constructor(
    @Inject(POKEMON_REPOSITORY)
    private readonly pokemonRepository: PokemonRepository,
    @Inject(POKE_API)
    private readonly pokemonApiService: PokeApiService
  ) {}

  async execute(name: string): Promise<Pokemon> {
    const existingPokemon = await this.pokemonRepository.findByName(name)

    if (existingPokemon) {
      return existingPokemon
    }

    const data = await this.pokemonApiService.getPokemonByName(name)

    const pokemon = new Pokemon({
      name,
      abilities: data.abilities.map((ability) => ability.ability.name),
      types: data.types.map((type) => type.type.name),
      id: data.id,
      sprites: {
        front: data.sprites.front_default,
        back: data.sprites.back_default
      }
    })

    await this.pokemonRepository.create(pokemon)

    return pokemon
  }
}
