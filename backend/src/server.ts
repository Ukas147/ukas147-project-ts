import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import app from './infrastructure/http/app';

const PORT = 3000;
const server = createServer(app);
const io = new SocketServer(server, { cors: { origin: "http://ukas147.com:5173", credentials: true } });

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://ukas147.com:${PORT}`);
});