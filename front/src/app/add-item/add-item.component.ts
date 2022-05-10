import { UserService } from "../services/user.service";
import {Component, Injectable, Input, OnInit} from "@angular/core";
import {User} from "../user";
import {ItemService} from "../services/item.service";
import {Item} from "../item";

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
})

export class AddItemComponent implements OnInit {

  constructor(private userService: UserService, private itemService: ItemService) {

  }

  users: User[] = [];
  chosenUserId:number = -1;
  title:string = '';
  items: Item[] = [];

  onClick(){
      let subscription = this.userService.getUsersList();
      subscription.subscribe(result => this.users = result)
  }

  addItem(){
    let newItem: Item = {
      title: this.title,
      userId: this.chosenUserId
    }

    this.itemService
      .addItem(newItem)
      .subscribe(item=> this.items.push(item));
    this.resetFields();
  }

  resetFields(){
    this.title= '';
    this.chosenUserId = -1;
    this.items = [];
  }

  ngOnInit(): void {
  }
}
