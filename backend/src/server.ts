import express, { Request, Response } from 'express';
import cors from 'cors';
import db from './db';
import sqlite3 from 'sqlite3';

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://ukas147.com:5173',
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));

app.post('/add', (req: Request, res: Response): void => {
  const { name } = req.body;
  
  if (!name) {
    res.send(`O nome é obrigatório! ${JSON.stringify(req.body)}`);
    return;
  }

  const sql = `INSERT INTO users (name) VALUES (?)`;
  db.run(sql, [name], function (this: sqlite3.Statement, err: Error | null): void {
    if (err) {
      res.send(`Erro ao cadastrar pessoa`);
      console.log(err.message)
      return;
    }
    res.send(`Pessoa cadastrada com sucesso!`);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://ukas147.com:${PORT}`);
});