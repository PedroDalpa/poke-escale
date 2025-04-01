import { Pokemon } from '@modules/pokemon/entities/pokemon.entity'
import { CreatePokemonUseCase } from '@modules/pokemon/use-cases/create-pokemon/create-pokemon.use-case'
import { GetPokemonUseCase } from '@modules/pokemon/use-cases/get-pokemon/get-pokemon.use-case'
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
    private readonly listPokemonsUseCase: ListPokemonsUseCase,
    private readonly getPokemonUseCase: GetPokemonUseCase
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

  @Get(':value')
  @HttpCode(HttpStatus.OK)
  async get(@Param('value') value: string): Promise<Pokemon> {
    return this.getPokemonUseCase.execute(value)
  }
}
