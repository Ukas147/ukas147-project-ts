import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();

// Abre (ou cria) o banco de dados "meuBanco.db"
const db = new sqlite.Database('./src/meuBanco.db', (err: Error | null) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
    console.log('Banco de dados aberto com sucesso.');
  }
});

// Cria a tabela "pessoas" com as colunas id e nome
db.serialize(() => {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS pessoas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL CHECK (LENGTH(nome) <= 30)
    )
    `,
    (err: Error | null): void => {
      if (err) {
        console.error('Erro ao criar a tabela:', err.message);
      } else {
        console.log('Tabela "pessoas" criada com sucesso.');
      }
    }
  );
});

// NÃO feche a conexão aqui, para que ela fique disponível para o server.ts
export default db;