import sqlite3 from 'sqlite3';
import { db } from './SQLiteConnection';
import { Department } from '../../domain/entities/Department';
import { DepartmentRepository } from '../../application/repositories/DepartmentRepository';

export class SQLiteDepartmentRepository implements DepartmentRepository {
  create(department: Department): Promise<Department> {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO departments (department) VALUES (?)`;
      db.run(sql, [department.department], function (this: sqlite3.RunResult, err: Error | null) {
        if (err) return reject(err);
        resolve(new Department(this.lastID, department.department));
      });
    });
  }

  findAll(): Promise<Department[]> {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM departments`;
      db.all(sql, [], (err: Error | null, rows: any[]) => {
        if (err) return reject(err);
        resolve((rows as { id: number, department: string }[]).map(row => new Department(row.id, row.department)));
      });
    });
  }

  delete(id: number): Promise<void> {
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