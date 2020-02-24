import { Component } from '@angular/core';
import { UserService } from './service-module/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

  constructor(public userService: UserService) {}

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
