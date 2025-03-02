import sqlite3 from 'sqlite3';
import { db } from './SQLiteConnection';
import { User } from '../../domain/entities/User';
import { UserRepository } from '../../application/repositories/UserRepository';

export class SQLiteUserRepository implements UserRepository {
  create(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO users (name) VALUES (?)`;
      db.run(sql, [user.name], function (this: sqlite3.RunResult, err: Error | null) {
        if (err) return reject(err);
        resolve(new User(this.lastID, user.name));
      });
    });
  }

  findAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM users`;
      db.all(sql, [], (err: Error | null, rows: any[]) => {
        if (err) return reject(err);
        resolve((rows as { id: number, name: string }[]).map(row => new User(row.id, row.name)));
      });
    });
  }

  delete(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM users WHERE id = ?`;
      db.run(sql, [id], function (this: sqlite3.RunResult, err: Error | null) {
        if (err) return reject(err);
        if (this.changes === 0) {
          return reject(new Error('Usuário não encontrado'));
        }
        resolve();
      });
    });
  }
}