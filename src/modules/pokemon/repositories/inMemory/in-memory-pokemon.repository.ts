import { PokemonRepository } from '../pokemon-repository.interface'
import { Pokemon } from '../../entities/pokemon.entity'

export class InMemoryPokemonRepository implements PokemonRepository {
  private pokemons: Pokemon[] = []

  async create(createPokemon: Pokemon): Promise<void> {
    const pokemon = new Pokemon({
      ...createPokemon
    })

    this.pokemons.push(pokemon)
    return Promise.resolve()
  }

  async findByName(name: string): Promise<Pokemon | null> {
    const pokemon = this.pokemons.find((c) => c.name === name)
    if (!pokemon) return null
    return Promise.resolve(pokemon)
  }
}
