import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    name: '',
    email: ''
  };
  users: User[];
  showDetails: boolean = true;
  loaded: boolean = false;
  enabledAdd: boolean = false;
  isActive: boolean;
  showForm: boolean = false;
  @ViewChild('userForm') form : any;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    
  }


  toggleHide(user: User){
    user.hide = !user.hide;
  }

  onSubmit({value, valid}:{value:User, valid:boolean}){
    if(!valid){
      console.log('Invalid form');
    }
    else{
      console.log(value, valid);
      value.isActive = true;
      value.hide = true;
      value.joinedOn = new Date();
      this.userService.addUser(value);
      this.form.reset();
    }
  }

  /*onSubmit(userForm){
    console.log(userForm._directives[0]);
  }*/

}
