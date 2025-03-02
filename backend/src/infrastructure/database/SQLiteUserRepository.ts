import sqlite3 from 'sqlite3';
import { User } from '../../domain/entities/User';
import { UserRepository } from '../../application/repositories/UserRepository';

export class SQLiteUserRepository implements UserRepository {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database('./src/infrastructure/database/mydatabase.db', (err: Error | null) => {
      if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
      } else {
        console.log('Banco de dados aberto com sucesso.');
      }
    });

    this.db.serialize(() => {
      this.db.run(
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
            console.log('Tabela "users" criada com sucesso.');
          }
        }
      );
    });
  }

  create(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO users (name) VALUES (?)`;
      this.db.run(sql, [user.name], function (this: sqlite3.RunResult, err: Error | null) {
        if (err) return reject(err);
        resolve(new User(this.lastID, user.name));
      });
    });
  }

  findAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM users`;
      this.db.all(sql, [], (err: Error | null, rows: any[]) => {
        if (err) return reject(err);
        // Cast para o tipo esperado
        resolve((rows as { id: number, name: string }[]).map(row => new User(row.id, row.name)));
      });
    });
  }

  delete(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM users WHERE id = ?`;
      this.db.run(sql, [id], function (this: sqlite3.RunResult, err: Error | null) {
        if (err) return reject(err);
        if (this.changes === 0) {
          return reject(new Error("Usuário não encontrado"));
        }
        resolve();
      });
    });
  }
}