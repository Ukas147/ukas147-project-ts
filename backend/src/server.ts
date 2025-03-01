import express, { Request, Response } from 'express';
import cors from 'cors';
import db from './db';
import sqlite3 from 'sqlite3';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post('/add', (req: Request, res: Response): void => {
  const { nome } = req.body;
  
  if (!nome) {
    res.send('O nome é obrigatório!');
    return;
  }

  const sql = `INSERT INTO pessoas (nome) VALUES (?)`;
  db.run(sql, [nome], function (this: sqlite3.Statement, err: Error | null): void {
    if (err) {
      res.send(`Erro ao cadastrar pessoa: ${err.message}`);
      return;
    }
    res.send(`Pessoa cadastrada com sucesso!`);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});