import express, { Request, Response } from 'express';
import cors from 'cors';
import db from './db';
import sqlite3 from 'sqlite3';
import { Server as SocketServer } from 'socket.io';
import { createServer } from 'http';

const app = express();
const PORT = 3000;
const server = createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://ukas147.com:5173", // Certifique-se de permitir o frontend
    credentials: true,
  }
});

app.use(cors({
  origin: 'http://ukas147.com:5173',
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Adicionado para aceitar JSON no corpo da requisição

// Rota para adicionar usuário
app.post('/add', (req: Request, res: Response): void => {
  const { name } = req.body;
  
  if (!name) {
    res.status(400).send(`O nome é obrigatório!`);
    return;
  }

  const sql = `INSERT INTO users (name) VALUES (?)`;
  db.run(sql, [name], function (this: sqlite3.RunResult, err: Error | null): void {
    if (err) {
      res.status(500).send("Erro ao cadastrar pessoa");
      console.error(err.message);
      return;
    }

    // Emitir evento para todos os clientes via WebSocket
    io.emit('user_added', { id: this.lastID, name });

    res.send("Pessoa cadastrada com sucesso!");
  });
});

// Rota para obter todos os usuários
app.get('/users', (req: Request, res: Response): void => {
  const sql = `SELECT * FROM users`;
  
  db.all(sql, [], (err: Error | null, rows: any[]) => {
    if (err) {
      res.status(500).json({ error: "Erro ao buscar usuários" });
      console.error(err.message);
      return;
    }
    res.json(rows);
  });
});

// Iniciar o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://ukas147.com:${PORT}`);
});