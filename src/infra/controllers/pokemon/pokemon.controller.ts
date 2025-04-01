import { Pokemon } from '@modules/pokemon/entities/pokemon.entity'
import { CreatePokemonUseCase } from '@modules/pokemon/use-cases/create-pokemon/create-pokemon.use-case'
import { Controller, Post, HttpCode, HttpStatus, Param } from '@nestjs/common'

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly createPokemonUseCase: CreatePokemonUseCase) {}

  @Post(':name')
  @HttpCode(HttpStatus.CREATED)
  async create(@Param('name') name: string): Promise<Pokemon> {
    return this.createPokemonUseCase.execute(name)
  }
}
