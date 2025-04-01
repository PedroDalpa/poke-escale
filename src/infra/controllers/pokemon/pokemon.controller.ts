import { Pokemon } from '@modules/pokemon/entities/pokemon.entity'
import { CreatePokemonUseCase } from '@modules/pokemon/use-cases/create-pokemon/create-pokemon.use-case'
import { ListPokemonsUseCase } from '@modules/pokemon/use-cases/list-pokemons/list-pokemons.use-case'
import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Param,
  Get
} from '@nestjs/common'

@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly createPokemonUseCase: CreatePokemonUseCase,
    private readonly listPokemonsUseCase: ListPokemonsUseCase
  ) {}

  @Post(':name')
  @HttpCode(HttpStatus.CREATED)
  async create(@Param('name') name: string): Promise<Pokemon> {
    return this.createPokemonUseCase.execute(name)
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  async list(): Promise<Pokemon[]> {
    return this.listPokemonsUseCase.execute()
  }
}
