import { Module } from '@nestjs/common'
import { PokeApi } from './pokeApi.service'
import { POKE_API } from './pokeApi.interface'

@Module({
  providers: [
    {
      provide: POKE_API,
      useClass: PokeApi
    }
  ],
  exports: [POKE_API]
})
export class PokeApiModule {}
