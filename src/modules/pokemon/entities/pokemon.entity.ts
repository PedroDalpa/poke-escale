export class Pokemon {
  id: number
  name: string
  abilities: string[]
  types: string[]
  sprites: { front: string; back: string }

  constructor(data: Pokemon) {
    Object.assign(this, {
      ...data
    })
  }
}
