import { ApiProperty } from '@nestjs/swagger'

class PokemonSprites {
  @ApiProperty({
    description: 'URL to the front view sprite of the Pokemon',
    example: 'https://assets.pokemon.com/assets/sprites/pikachu_front.png'
  })
  front: string

  @ApiProperty({
    description: 'URL to the back view sprite of the Pokemon',
    example: 'https://assets.pokemon.com/assets/sprites/pikachu_back.png'
  })
  back: string
}
export class Pokemon {
  @ApiProperty({
    description: 'Unique identifier for the Pokemon',
    example: 25
  })
  id: number

  @ApiProperty({
    description: 'Name of the Pokemon',
    example: 'Pikachu'
  })
  name: string

  @ApiProperty({
    description: 'List of Pokemon abilities',
    example: ['Static', 'Lightning Rod'],
    isArray: true
  })
  abilities: string[]

  @ApiProperty({
    description: 'List of Pokemon types',
    example: ['Electric'],
    isArray: true
  })
  types: string[]

  @ApiProperty({
    description: 'Pokemon sprite images',
    type: PokemonSprites
  })
  sprites: { front: string; back: string }
  deletedAt?: Date | null

  constructor(data: Pokemon) {
    Object.assign(this, {
      ...data
    })
  }
}
