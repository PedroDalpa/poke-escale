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
    const pokemon = this.pokemons.find((p) => p.name === name && !p.deletedAt)
    if (!pokemon) return null
    return Promise.resolve(pokemon)
  }

  async findAll(): Promise<Pokemon[]> {
    return Promise.resolve(this.pokemons.filter((p) => !p.deletedAt))
  }

  async findById(id: number): Promise<Pokemon | null> {
    const pokemon = this.pokemons.find((p) => p.id === id && !p.deletedAt)
    if (!pokemon) return null
    return Promise.resolve(pokemon)
  }

  async update(updatePokemon: Pokemon): Promise<void> {
    const index = this.pokemons.findIndex((p) => p.id === updatePokemon.id)

    this.pokemons[index] = updatePokemon

    return Promise.resolve()
  }
}
