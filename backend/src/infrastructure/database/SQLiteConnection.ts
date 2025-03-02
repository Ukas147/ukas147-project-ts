import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('./src/infrastructure/database/mydatabase.db', (err: Error | null) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
    console.log('Banco de dados aberto com sucesso.');
  }
});

export function initDatabase(): void {
  db.serialize(() => {
    // Cria a tabela de departments
    db.run(
      `
      CREATE TABLE IF NOT EXISTS departments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        department TEXT NOT NULL
      )
      `,
      (err: Error | null): void => {
        if (err) {
          console.error('Erro ao criar a tabela "departments":', err.message);
        } else {
          console.log('Tabela "departments" criada ou já existente.');
        }
      }
    );

    // Cria a tabela de usuários com coluna departmentsId e relacionamento de chave estrangeira
    db.run(
      `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL CHECK (LENGTH(name) <= 30),
        departmentsId INTEGER,
        FOREIGN KEY (departmentsId) REFERENCES departments(id)
      )
      `,
      (err: Error | null): void => {
        if (err) {
          console.error('Erro ao criar a tabela "users":', err.message);
        } else {
          console.log('Tabela "users" criada ou já existente.');
        }
      }
    );
  });
}
