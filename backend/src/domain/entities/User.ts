export class User {
    constructor(
      public readonly id: number | null,
      public name: string
    ) {
      if (!name || name.length > 30) {
        throw new Error('Nome inválido.');
      }
    }
  }  