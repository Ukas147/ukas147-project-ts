export class Department {
  constructor(
    public readonly id: string | null,
    public label: string
  ) {
    if (!label || label.length > 30) {
      throw new Error('Departamento inválido.');
    }
  }
}  