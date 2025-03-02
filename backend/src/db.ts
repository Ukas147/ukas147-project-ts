import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();

const db = new sqlite.Database('./src/mydatabase.db', (err: Error | null) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
    console.log('Banco de dados aberto com sucesso.');
  }
});
db.serialize(() => {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL CHECK (LENGTH(name) <= 30)
    )
    `,
    (err: Error | null): void => {
      if (err) {
        console.error('Erro ao criar a tabela:', err.message);
      } else {
        console.log('Tabel "users" criada com sucesso.');
      }
    }
  );
});

// NÃO feche a conexão aqui, para que ela fique disponível para o server.ts
export default db;