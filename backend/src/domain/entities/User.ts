export class User {
  constructor(
    public readonly id: string | null,
    public label: string,
    public departments_id?: string,
    public departments_label?: string
  ) {
    if (!label || label.length > 30) {
      throw new Error('Nome inválido.');
    }
  }
}