import { createServer } from 'http';
import { initDatabase } from '../database/SQLiteConnection';
import { initSocket } from '../socket';
import app from './app';

const PORT = 3000;
const server = createServer(app);

initSocket(server);
initDatabase();

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});