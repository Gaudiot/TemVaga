import User from '../../common/src/User/user';

export default class UserRegister {
  users: User[] = [];

  register(user: User): User {
    var result = null;
    if (this.cpfNotRegistered(user.cpf)) {
      result = new User();
      result.copyFrom(user);
      this.users.push(result);
    }
    return result;
  }

  cpfNotRegistered(cpf: string): boolean {
    return !this.users.find(u => u.cpf == cpf);
  }

  update(user: User): User {
    var result: User = this.users.find(u => u.cpf == user.cpf);
    if (result) result.copyFrom(user);
    return result;
  }

  getUser(cpf: string): User {
    var result: User = this.users.find(u => u.cpf == cpf);
    return result;
  }
  //TODO: Implement getUsers
  getUsers(cpf: string[]): User[] {
    return;
  }

  getAllUsers(): User[] {
    return this.users;
  }
  //Maybe return index
  delete(cpf: string): number {
    var index: number = this.users.findIndex(u => u.cpf == cpf);
    if (index !== -1) this.users.splice(index, 1);
    return index;
  }

  evaluateUser(cpfToEvaluate: string, evaluationValue: number, userRole: 'driver' | 'passenger'): number {
    const user = this.users.find(u => u.cpf === cpfToEvaluate);
    if (!user){
      throw new Error("Usuário não encontrado");
    }    

    const newUserGrade = (userRole === 'driver') ? 
    user.evaluateAsDriver(evaluationValue) : user.evaluateAsPassenger(evaluationValue);

    return newUserGrade;
  }
}
