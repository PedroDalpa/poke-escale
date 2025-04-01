import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type PokemonDocument = HydratedDocument<Pokemon>

@Schema()
export class Pokemon {
  @Prop({ required: true })
  id: number

  @Prop({ required: true })
  name: string

  @Prop([String])
  abilities: string[]

  @Prop([String])
  types: string[]

  @Prop({ type: Object })
  sprites: { front: string; back: string }

  @Prop()
  deletedAt: Date
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon)
