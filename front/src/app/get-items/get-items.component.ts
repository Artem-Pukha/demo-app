import { UserService } from "../services/user.service";
import {Component, Injectable, Input, OnInit} from "@angular/core";
import {User} from "../user";
import {ItemService} from "../services/item.service";
import {Item} from "../item";

@Component({
  selector: 'get-items',
  templateUrl: './get-items.component.html',
})

export class GetItemsComponent implements OnInit {

  constructor(private userService: UserService, private itemService: ItemService) {

  }

  users: User[] = [];
  chosenUserId:number = -1;
  items: Item[] = [];

  displayedColumns: string[] = ['item'];
  tableHidden:boolean = true;

  getUsers() {
    let subscription = this.userService.getUsersList();
    subscription.subscribe(result => this.users = result)
  }

  getItems() {
    let subscription = this.itemService.getItems(this.chosenUserId.toString());
    subscription.subscribe(result => this.items= result)
    this.tableHidden = false;
  }

  ngOnInit(): void {
  }
}
