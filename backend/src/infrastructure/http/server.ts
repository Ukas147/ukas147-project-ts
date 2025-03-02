import { createServer } from 'http';
import app from './app';
import { initSocket } from '../socket';
import { initDatabase } from '../database/SQLiteConnection';

const PORT = 3000;
const server = createServer(app);

initSocket(server);
initDatabase(); // Inicializa as tabelas antes de iniciar o servidor

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});