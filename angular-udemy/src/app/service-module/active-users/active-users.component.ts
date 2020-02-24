import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent {
  users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService) {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
