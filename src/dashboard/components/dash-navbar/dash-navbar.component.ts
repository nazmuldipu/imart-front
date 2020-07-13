import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.scss'],
})
export class DashNavbarComponent implements OnInit {
  @Input() user:User;
  @Output() expand = new EventEmitter<boolean>();

  mode = true;
  
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSlide() {
    this.mode = !this.mode;
    this.expand.emit(this.mode);
  }

  onLogout() {
    this.auth.logout();
  }
}
