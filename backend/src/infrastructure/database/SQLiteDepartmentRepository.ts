import sqlite3 from 'sqlite3';
import { DepartmentRepository } from '../../application/repositories/DepartmentRepository';
import { Department } from '../../domain/entities/Department';
import { db } from './SQLiteConnection';

export class SQLiteDepartmentRepository implements DepartmentRepository {
  create(department: Department): Promise<Department> {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO departments (label) VALUES (?)`;
      db.run(sql, [department.label], function (this: sqlite3.RunResult, err: Error | null) {
        if (err) return reject(err);
        resolve(new Department(String(this.lastID), department.label));
      });
    });
  }

  findAll(): Promise<Department[]> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM departments`;
      db.all(sql, [], (err: Error | null, rows: any[]) => {
        if (err) return reject(err);
        resolve((rows as { id: string, label: string }[]).map(row => new Department(row.id, row.label)));
      });
    });
  }

  delete(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM departments WHERE id = ?`;
      db.run(sql, [id], function (this: sqlite3.RunResult, err: Error | null) {
        if (err) return reject(err);
        if (this.changes === 0) {
          return reject(new Error('Departamento não encontrado'));
        }
        resolve();
      });
    });
  }
}