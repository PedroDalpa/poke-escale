import { Module } from '@nestjs/common'
import { PokemonController } from '../../infra/controllers/pokemon/pokemon.controller'
import { POKEMON_REPOSITORY } from './repositories/pokemon-repository.interface'
import { CreatePokemonUseCase } from './use-cases/create-pokemon/create-pokemon.use-case'
import { InMemoryPokemonRepository } from './repositories/inMemory/in-memory-pokemon.repository'
import { PokeApiModule } from '@infra/external/pokemonAPI/pokeApi.module'
import { ListPokemonsUseCase } from './use-cases/list-pokemons/list-pokemons.use-case'
import { GetPokemonUseCase } from './use-cases/get-pokemon/get-pokemon.use-case'
import { UpdatePokemonUseCase } from './use-cases/update-pokemon/update-pokemon.use-case'
import { DeletePokemonUseCase } from './use-cases/delete-pokemon/delete-pokemon.use-case'

@Module({
  imports: [PokeApiModule],
  controllers: [PokemonController],
  providers: [
    {
      provide: POKEMON_REPOSITORY,
      useClass: InMemoryPokemonRepository
    },
    CreatePokemonUseCase,
    ListPokemonsUseCase,
    GetPokemonUseCase,
    UpdatePokemonUseCase,
    DeletePokemonUseCase
  ]
})
export class PokemonModule {}
