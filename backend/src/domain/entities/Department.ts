export class Department {
    constructor(
      public readonly id: number | null,
      public department: string
    ) {
      if (!department || department.length > 30) {
        throw new Error('Departamento inválido.');
      }
    }
  }  