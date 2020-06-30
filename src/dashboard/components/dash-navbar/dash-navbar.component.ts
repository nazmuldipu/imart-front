import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.scss'],
})
export class DashNavbarComponent implements OnInit {
  @Output() expand = new EventEmitter<boolean>();

  mode = true;
  user$;

  constructor(public userService: UserService, private auth: AuthService) {}

  ngOnInit(): void {
    this.userService.getUserProfile();
    this.user$ = this.userService.user$;
  }

  onSlide() {
    this.mode = !this.mode;
    this.expand.emit(this.mode);
  }

  onLogout() {
    this.auth.logout();
  }
}
