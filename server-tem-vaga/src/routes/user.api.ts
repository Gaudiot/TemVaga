import User from '../../../common/src/User/user';
import UserRegister from '../user.register';
import express = require('express');

const userRoutes = express.Router();

const userRegister: UserRegister = new UserRegister();

userRoutes.post('/user', (req: express.Request, res: express.Response) => {
  const { cpf } = req.body;
  let user = new User();
  user.cpf = cpf;
  userRegister.register(user);
  res.send({user})
});

userRoutes.put('/user', (req: express.Request, res: express.Response) => {
  // userRegister.update(user)
});

userRoutes.get('/user/:cpf', (req: express.Request, res: express.Response) => {
  const { cpf } = req.params;
  const user = userRegister.getUser(cpf)
  res.send({user})
});

userRoutes.get('/user/some', (req: express.Request, res: express.Response) => {
  //userRegister.getUsers(cpf[])
});

userRoutes.get('/users', (req: express.Request, res: express.Response) => {
  const users = userRegister.getAllUsers();
  res.send(JSON.stringify({users}));
});

userRoutes.delete(
  '/user/:cpf',
  (req: express.Request, res: express.Response) => {
    // userRegister.delete(cpf)
  }
);

userRoutes.put('/user/:cpf', (req: express.Request, res: express.Response) => {
  const { cpf: cpfToEvaluate } = req.params;
  const { evaluationValue, userRole } = req.body;
  const grade = userRegister.evaluateUser(cpfToEvaluate, evaluationValue, userRole);
  res.send({grade});
});

module.exports = userRoutes;
