import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'delete-user',
  templateUrl: './delete-user.component.html',
})
export class DeleteUserComponent implements OnInit {

  id = '';
  status:string = '';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.userService
      .deleteUser(this.id)
      .subscribe(() => this.status = 'Delete successful!');
    this.resetFields();
  }

  resetFields(){
    this.id= '';
    setTimeout(() => { this.status = '' }, 3000)
  }
}
