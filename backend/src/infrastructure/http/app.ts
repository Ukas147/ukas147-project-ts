import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddUserUseCase } from '../../application/usecases/AddUserUseCase';
import { GetAllUsersUseCase } from '../../application/usecases/GetAllUsersUseCase';
import { DeleteUserUseCase } from '../../application/usecases/DeleteUserUseCase';
import { SQLiteUserRepository } from '../database/SQLiteUserRepository';
import { getSocket } from '../socket';

const app = express();
const userRepository = new SQLiteUserRepository();

const addUserUseCase = new AddUserUseCase(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota para adicionar usuário
app.post('/add', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).send("O nome é obrigatório!");
      return;
    }
    const user = await addUserUseCase.execute(name);
    // Emite o evento para todos os clientes conectados
    getSocket().emit('user_added', user);
    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
});

// Rota para obter todos os usuários
app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersUseCase.execute();
    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro desconhecido" });
    }
  }
});

// Rota para excluir usuário
app.delete('/delete-user/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("ID do usuário é obrigatório!");
      return;
    }
    await deleteUserUseCase.execute(parseInt(id));
    // Emite o evento para notificar a remoção
    getSocket().emit("user_deleted", { id: parseInt(id) });
    res.send("Usuário excluído com sucesso!");
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
});

export default app;