import sqlite3 from 'sqlite3';
import { UserRepository } from '../../application/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { db } from './SQLiteConnection';

export class SQLiteUserRepository implements UserRepository {
  create(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO users (label) VALUES (?)`;
      db.run(sql, [user.label], function (this: sqlite3.RunResult, err: Error | null) {
        if (err) return reject(err);
        resolve(new User(String(this.lastID), user.label));
      });
    });
  }

  findAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM users`;
      db.all(sql, [], (err: Error | null, rows: any[]) => {
        if (err) return reject(err);
        resolve((rows as { id: string, label: string }[]).map(row => new User(row.id, row.label)));
      });
    });
  }

  delete(id: string): Promise<void> {
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