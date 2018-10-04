import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {of} from 'rxjs';

@Injectable()
export class UserService {

  users : User[];

  constructor() { 
    this.users = [
      {
        name: 'Harry Potter',
        email: 'harry@gmail.com',
        isActive: true,
        joinedOn: '02/01/2018 08:30:00',
        hide:true
      },
      {
        name: 'Ronald Weasley',
        email: 'ron@gmail.com',
        isActive: false,
        joinedOn: '04/05/2018 11:40:00',
        hide:true
      },
      {
        name: 'Hermione Granger',
        email: 'hermione@gmail.com',
        isActive: true,
        joinedOn: '11/06/2018 22:10:00',
        hide:true
      }
    ];
  }

  getUsers() : Observable<User[]> {
    return of(this.users);
  }

  addUser(user:User){
    this.users.unshift(user);
  }


}
