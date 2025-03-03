import sqlite3 from "sqlite3";

export const db = new sqlite3.Database(
  "./src/infrastructure/database/mydatabase.db",
  (err: Error | null) => {
    if (err) {
      console.error("Erro ao abrir o banco de dados:", err.message);
    } else {
      console.log("Banco de dados aberto com sucesso.");
    }
  }
);

export function initDatabase(): void {
  db.serialize(() => {

    db.run(
      `
      CREATE TABLE IF NOT EXISTS departments (
        id TEXT PRIMARY KEY AUTOINCREMENT,
        label TEXT NOT NULL
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

    db.run(
      `
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY AUTOINCREMENT,
        label TEXT NOT NULL CHECK (LENGTH(name) <= 30),
        departments_id INTEGER,
        FOREIGN KEY (departments_id) REFERENCES departments(id)
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
