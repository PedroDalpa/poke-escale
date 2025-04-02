import { ApiProperty } from '@nestjs/swagger'

export class UpdatePokemonDto {
  @ApiProperty({ description: 'Name of the Pokemon', required: false })
  name?: string

  @ApiProperty({
    description: 'List of Pokemon abilities',
    required: false,
    type: [String]
  })
  abilities?: string[]

  @ApiProperty({
    description: 'List of Pokemon types',
    required: false,
    type: [String]
  })
  types?: string[]

  @ApiProperty({
    description: 'Pokemon sprites',
    required: false,
    example: {
      front: 'https://example.com/front.png',
      back: 'https://example.com/back.png'
    }
  })
  sprites?: { front?: string; back?: string }
}
