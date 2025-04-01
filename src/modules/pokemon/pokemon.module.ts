import { Module } from '@nestjs/common'
import { PokemonController } from '../../infra/controllers/pokemon/pokemon.controller'
import { POKEMON_REPOSITORY } from './repositories/pokemon-repository.interface'
import { CreatePokemonUseCase } from './use-cases/create-pokemon/create-pokemon.use-case'
import { PokeApiModule } from '@infra/external/pokemonAPI/pokeApi.module'
import { ListPokemonsUseCase } from './use-cases/list-pokemons/list-pokemons.use-case'
import { GetPokemonUseCase } from './use-cases/get-pokemon/get-pokemon.use-case'
import { UpdatePokemonUseCase } from './use-cases/update-pokemon/update-pokemon.use-case'
import { DeletePokemonUseCase } from './use-cases/delete-pokemon/delete-pokemon.use-case'
import { MongooseModule } from '@nestjs/mongoose'
import { PokemonSchema } from './repositories/mongodb/pokemon.schema'
import { MongoPokemonRepository } from './repositories/mongodb/mongo.repository'

@Module({
  imports: [
    PokeApiModule,
    MongooseModule.forFeature([{ name: 'Pokemon', schema: PokemonSchema }])
  ],
  controllers: [PokemonController],
  providers: [
    {
      provide: POKEMON_REPOSITORY,
      useClass: MongoPokemonRepository
    },
    CreatePokemonUseCase,
    ListPokemonsUseCase,
    GetPokemonUseCase,
    UpdatePokemonUseCase,
    DeletePokemonUseCase
  ]
})
export class PokemonModule {}
