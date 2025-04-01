import { UpdatePokemonDto } from '@modules/pokemon/dto/update-pokemon.dto'
import { Pokemon } from '@modules/pokemon/entities/pokemon.entity'
import { CreatePokemonUseCase } from '@modules/pokemon/use-cases/create-pokemon/create-pokemon.use-case'
import { GetPokemonUseCase } from '@modules/pokemon/use-cases/get-pokemon/get-pokemon.use-case'
import { ListPokemonsUseCase } from '@modules/pokemon/use-cases/list-pokemons/list-pokemons.use-case'
import { UpdatePokemonUseCase } from '@modules/pokemon/use-cases/update-pokemon/update-pokemon.use-case'
import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Param,
  Get,
  Patch,
  Body
} from '@nestjs/common'

@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly createPokemonUseCase: CreatePokemonUseCase,
    private readonly listPokemonsUseCase: ListPokemonsUseCase,
    private readonly getPokemonUseCase: GetPokemonUseCase,
    private readonly updatePokemonUseCase: UpdatePokemonUseCase
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

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() pokemon: UpdatePokemonDto
  ): Promise<Pokemon> {
    return this.updatePokemonUseCase.execute(id, pokemon)
  }
}
