import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import app from './app';

const PORT = 3000;
const server = createServer(app);

const io = new SocketServer(server, {
    cors: {
        origin: "http://ukas147.com:5173",
        credentials: true,
    }
});

// Exemplo de integração com WebSocket
io.on('connection', (socket) => {
    console.log('Novo cliente conectado via WebSocket');

    // Aqui você pode definir os eventos que deseja escutar ou emitir,
    // por exemplo, ao adicionar ou excluir um usuário, emitir um evento:
    // socket.emit('user_updated', { ... });
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://ukas147.com:${PORT}`);
});