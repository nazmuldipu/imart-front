import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  message = '';
  errorMessage = '';
  loading = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onClose() {
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }
}
