import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['The inital task', '2nd initial task']);
  goal = this.goals.asObservable();

  constructor(private http:HttpClient) { }

  getToDos() {
    return this.http.get('http://localhost:56275/api/ToDoApi');
  }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
