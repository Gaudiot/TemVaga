import User from '../../../common/src/User/user';
import UserRegister from '../user.register';
import express = require('express');

const userRoutes = express.Router();

const userRegister: UserRegister = new UserRegister();

userRoutes.post('/user', (req: express.Request, res: express.Response) => {
  // userRegister.register(user);
});

userRoutes.put('/user', (req: express.Request, res: express.Response) => {
  // userRegister.update(user)
});

userRoutes.get('/user/:cpf', (req: express.Request, res: express.Response) => {
  //userRegister.getUser(cpf)
});

userRoutes.get('/user/some', (req: express.Request, res: express.Response) => {
  //userRegister.getUsers(cpf[])
});

userRoutes.get('/user/all', (req: express.Request, res: express.Response) => {
  //userRegister.getAllUsers()
});

userRoutes.delete(
  '/user/:cpf',
  (req: express.Request, res: express.Response) => {
    // userRegister.delete(cpf)
  }
);

userRoutes.put('/user/:cpf', (req: express.Request, res: express.Response) => {
  const { cpf: cpfToEvaluate } = req.params;
  const { evaluationValue } = req.body;
  const grade = userRegister.evaluateUser(cpfToEvaluate, evaluationValue);
  res.send({grade});
});

module.exports = userRoutes;
