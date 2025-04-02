import { UpdatePokemonDto } from '@modules/pokemon/dto/update-pokemon.dto'
import { Pokemon } from '@modules/pokemon/entities/pokemon.entity'
import { CreatePokemonUseCase } from '@modules/pokemon/use-cases/create-pokemon/create-pokemon.use-case'
import { DeletePokemonUseCase } from '@modules/pokemon/use-cases/delete-pokemon/delete-pokemon.use-case'
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
  Body,
  Delete
} from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger'

@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly createPokemonUseCase: CreatePokemonUseCase,
    private readonly listPokemonsUseCase: ListPokemonsUseCase,
    private readonly getPokemonUseCase: GetPokemonUseCase,
    private readonly updatePokemonUseCase: UpdatePokemonUseCase,
    private readonly deletePokemonUseCase: DeletePokemonUseCase
  ) {}

  @Post(':name')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new Pokemon' })
  @ApiParam({ name: 'name', description: 'Name of the Pokemon to create' })
  @ApiResponse({
    status: 201,
    description: 'Pokemon created successfully',
    type: Pokemon
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Param('name') name: string): Promise<Pokemon> {
    return this.createPokemonUseCase.execute(name)
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all Pokemons' })
  @ApiResponse({
    status: 200,
    description: 'List of all Pokemons',
    type: [Pokemon]
  })
  async list(): Promise<Pokemon[]> {
    return this.listPokemonsUseCase.execute()
  }

  @Get(':value')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get a Pokemon by ID or name' })
  @ApiParam({ name: 'value', description: 'ID or name of the Pokemon' })
  @ApiResponse({ status: 200, description: 'Pokemon found', type: Pokemon })
  @ApiResponse({ status: 404, description: 'Pokemon not found' })
  async get(@Param('value') value: string): Promise<Pokemon> {
    return this.getPokemonUseCase.execute(value)
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a Pokemon' })
  @ApiParam({ name: 'id', description: 'ID of the Pokemon to update' })
  @ApiResponse({
    status: 200,
    description: 'Pokemon updated successfully',
    type: Pokemon
  })
  @ApiResponse({ status: 404, description: 'Pokemon not found' })
  async update(
    @Param('id') id: string,
    @Body() pokemon: UpdatePokemonDto
  ): Promise<Pokemon> {
    return this.updatePokemonUseCase.execute(id, pokemon)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a Pokemon' })
  @ApiParam({ name: 'id', description: 'ID of the Pokemon to delete' })
  @ApiResponse({ status: 204, description: 'Pokemon deleted successfully' })
  @ApiResponse({ status: 404, description: 'Pokemon not found' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.deletePokemonUseCase.execute(id)
  }
}
