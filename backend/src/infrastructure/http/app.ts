import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddUserUseCase } from '../../application/usecases/User/AddUserUseCase';
import { GetAllUsersUseCase } from '../../application/usecases/User/GetAllUsersUseCase';
import { DeleteUserUseCase } from '../../application/usecases/User/DeleteUserUseCase';
import { AddDepartmentUseCase } from '../../application/usecases/Department/AddDepartmentUseCase';
import { GetAllDepartmentsUseCase } from '../../application/usecases/Department/GetAllDepartmentsUseCase';
import { DeleteDepartmentUseCase } from '../../application/usecases/Department/DeleteDepartmentUseCase';
import { SQLiteUserRepository } from '../database/SQLiteUserRepository';
import { SQLiteDepartmentRepository } from '../database/SQLiteDepartmentRepository';
import { getSocket } from '../socket';

const app = express();
const userRepository = new SQLiteUserRepository();
const departmentRepository = new SQLiteDepartmentRepository();

const addUserUseCase = new AddUserUseCase(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);


const addDepartmentUseCase = new AddDepartmentUseCase(departmentRepository);
const getAllDepartmentsUseCase = new GetAllDepartmentsUseCase(departmentRepository);
const deleteDepartmentUseCase = new DeleteDepartmentUseCase(departmentRepository);

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota para obter todos os usuários
app.get('/get-all-users', async (req: Request, res: Response) => {
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


// Rota para adicionar usuário
app.post('/create-user', async (req: Request, res: Response) => {
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



app.get('/get-all-departments', async (req: Request, res: Response) => {
  try {
    const departments = await getAllDepartmentsUseCase.execute();
    res.json(departments);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro desconhecido" });
    }
  }
});


app.post('/create-department', async (req: Request, res: Response) => {
  try {
    const { department } = req.body;
    if (!department) {
      res.status(400).send("O departamento é obrigatório!");
      return;
    }
    const varDepartment = await addDepartmentUseCase.execute(department);
    // Emite o evento para todos os clientes conectados
    getSocket().emit('department_added', varDepartment);
    res.json(varDepartment);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
});

app.delete('/delete-department/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("ID do departamento é obrigatório!");
      return;
    }
    await deleteDepartmentUseCase.execute(parseInt(id));
    // Emite o evento para notificar a remoção
    getSocket().emit("department_deleted", { id: parseInt(id) });
    res.send("Departamento excluído com sucesso!");
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send("Erro desconhecido");
    }
  }
});

export default app;