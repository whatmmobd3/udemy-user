import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.inactiveUsers
  }

  onSetToActive(c: number) {
    this.userService.setToActive(c)
  }

}
