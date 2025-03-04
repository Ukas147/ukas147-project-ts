import sqlite3 from "sqlite3";
import { UserRepository } from "../../application/repositories/UserRepository";
import { User } from "../../domain/entities/User";
import { db } from "./SQLiteConnection";

export class SQLiteUserRepository implements UserRepository {
  create(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO users (id, label, departments_id) VALUES (?, ?, ?)`;
      db.run(
        sql,
        [user.id, user.label, user.departments_id],
        function (this: sqlite3.RunResult, err: Error | null) {
          if (err) return reject(err);
          resolve(user);
        }
      );
    });
  }

  findAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const sql = `
SELECT 
  u.id AS user_id,
  u.label AS user_label,
  d.id AS department_id,
  d.label AS department_label
FROM users u
LEFT JOIN departments d ON u.departments_id = d.id;
`;
      db.all(sql, [], (err: Error | null, rows: any[]) => {
        if (err) return reject(err);
        // rows.forEach(row => console.log('Row:', row));
        const users = rows.map(row => new User(
          row.user_id,
          row.user_label,
          row.department_id,
          row.department_label
        ));

        resolve(users);
      });
    });
  }

  delete(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM users WHERE id = ?`;
      db.run(sql, [id], function (this: sqlite3.RunResult, err: Error | null) {
        if (err) return reject(err);
        if (this.changes === 0) {
          return reject(new Error("Usuário não encontrado"));
        }
        resolve();
      });
    });
  }
}
