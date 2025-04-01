export class Pokemon {
  id: number
  name: string
  abilities: string[]
  types: string[]
  sprites: { front: string; back: string }
  deletedAt?: Date | null

  constructor(data: Pokemon) {
    Object.assign(this, {
      ...data
    })
  }
}
