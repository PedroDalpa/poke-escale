import { Injectable, HttpException, Logger } from '@nestjs/common'
import axios, { AxiosError } from 'axios'
import { PokeApiService, Ability, PokeApiResponse } from './pokeApi.interface'

@Injectable()
export class PokeApi implements PokeApiService {
  private readonly logger = new Logger(PokeApi.name)
  private readonly baseUrl = 'https://pokeapi.co/api/v2'

  async getPokemonByName(name: string): Promise<PokeApiResponse> {
    try {
      const { data } = await axios.get<PokeApiResponse>(
        `${this.baseUrl}/pokemon/${name.toLowerCase()}`
      )

      return data
    } catch (error: unknown) {
      this.logger.error(
        `Failed to fetch pokemon ${name}: ${error instanceof Error ? error.message : 'Unknown error'}`
      )

      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          throw new HttpException(`Pokemon ${name} not found`, 404)
        }
        throw new HttpException(
          'Failed to fetch pokemon data from PokeAPI',
          error.response?.status || 500
        )
      }

      throw new HttpException('Unexpected error occurred', 500)
    }
  }

  async getAbilitiesByPokemonName(name: string): Promise<Ability[]> {
    try {
      const pokemon = await this.getPokemonByName(name)
      return pokemon.abilities
    } catch (error: unknown) {
      this.logger.error(
        `Failed to fetch abilities for pokemon ${name}: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
      throw error
    }
  }
}
