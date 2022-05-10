import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent implements OnInit {

  id = 0;
  email = '';
  userName = '';
  surname = '';
  users: User[] = [];
  status: string = ''

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onClick() {
    let newUser: User = {
      id : this.id,
      email : this.email,
      name: this.userName,
      surname: this.surname
    }

    this.userService
      .addUser(newUser)
      .subscribe(user => this.users.push(user));
    this.status = 'User was added successfully!'
    this.resetFields()
  }

  resetFields(){
    this.email = '';
    this.userName = '';
    this.surname = '';
    setTimeout(() => { this.status = '' }, 3000)
  }
}
