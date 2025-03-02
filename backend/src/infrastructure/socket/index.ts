import { Server as SocketServer } from "socket.io";

let io: SocketServer | null = null;

export function initSocket(server: any): SocketServer {
  io = new SocketServer(server, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    }
  });
  io.on('connection', (socket) => {
    console.log("Novo cliente conectado via WebSocket");
  });
  return io;
}

export function getSocket(): SocketServer {
  if (!io) {
    throw new Error("Socket.io não foi inicializado.");
  }
  return io;
}