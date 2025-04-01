export type PokeApiResponse = {
  abilities: Ability[]
  name: string
  id: number
  types: Type[]
  sprites: Sprites
}

export type Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

type Type = {
  slot: number
  type: {
    name: string
    url: string
  }
}

type Sprites = {
  front_default: string
  back_default: string
}

export interface PokeApiService {
  getAbilitiesByPokemonName(name: string): Promise<Ability[]>
  getPokemonByName(name: string): Promise<PokeApiResponse>
}

export const POKE_API = 'POKE_API'
