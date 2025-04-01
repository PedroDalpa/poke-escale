import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { PokemonRepository } from '../pokemon-repository.interface'
import { Pokemon } from '@modules/pokemon/entities/pokemon.entity'
import { Pokemon as PokemonSchema } from './pokemon.schema'

@Injectable()
export class MongoPokemonRepository implements PokemonRepository {
  constructor(
    @InjectModel(PokemonSchema.name)
    private readonly pokemonModel: Model<PokemonSchema>
  ) {}

  async findByName(name: string): Promise<Pokemon | null> {
    return await this.pokemonModel
      .findOne({
        name,
        deletedAt: null
      })
      .exec()
  }

  async create(pokemon: Pokemon): Promise<void> {
    const createPokemon = new this.pokemonModel(pokemon)

    await createPokemon.save()
  }

  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonModel
      .find({ deletedAt: { $exists: false } })
      .exec()
  }

  async findById(id: number): Promise<Pokemon | null> {
    return await this.pokemonModel
      .findOne({ id, deletedAt: { $exists: false } })
      .exec()
  }
  async update(pokemon: Pokemon): Promise<void> {
    await this.pokemonModel.updateOne({ id: pokemon.id }, pokemon)
  }
}
