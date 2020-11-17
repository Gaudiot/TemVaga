import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import User from '../../../common/src/User/user';

@Injectable()
export class UserService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseURL = 'http://localhost:3000/userApi';

  constructor(private http: HttpClient) {}

  create(user: User): Observable<User> {
    return;
  }

  update(user: User): Observable<User> {
    return;
  }

  getUser(cpf: string): Observable<User> {
    return;
  }

  getUsers(cpfs: string[]): Observable<User[]> {
    return;
  }

  getAllUsers(): Observable<User[]> {
    return;
  }

  delete(cpf: string): Observable<number> {
    return;
  }

  evaluateUser(
    cpfToEvaluate: string,
    evaluationValue: number
  ): Observable<number> {
    return this.http.put<number>(`${this.baseURL}/user/${cpfToEvaluate}`, JSON.stringify({evaluationValue}), {headers: this.headers})
    .pipe(retry(2),
    map(res =>  {return res}));
  }
}
