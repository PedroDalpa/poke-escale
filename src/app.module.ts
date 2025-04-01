import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PokemonModule } from '@modules/pokemon/pokemon.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:password@localhost:27017'),
    PokemonModule
  ]
})
export class AppModule {}
