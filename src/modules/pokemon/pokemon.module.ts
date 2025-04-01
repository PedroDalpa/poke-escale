import { Module } from '@nestjs/common'
import { PokemonController } from '../../infra/controllers/pokemon/pokemon.controller'
import { POKEMON_REPOSITORY } from './repositories/pokemon-repository.interface'
import { CreatePokemonUseCase } from './use-cases/create-pokemon/create-pokemon.use-case'
import { InMemoryPokemonRepository } from './repositories/inMemory/in-memory-pokemon.repository'
import { PokeApiModule } from '@infra/external/pokemonAPI/pokeApi.module'

@Module({
  imports: [PokeApiModule],
  controllers: [PokemonController],
  providers: [
    {
      provide: POKEMON_REPOSITORY,
      useClass: InMemoryPokemonRepository
    },
    CreatePokemonUseCase
  ]
})
export class PokemonModule {}
