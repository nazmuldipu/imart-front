import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  user: User;
  users: User[] = [];
  imageUrl = '';
  message = '';
  errorMessage = '';

  loading = false;
  showPasswordForm = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  async getAllUser() {
    this.loading = true;
    try {
      this.users = await this.userService.getAll().toPromise();
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onEdit(id) {
    const value = this.users.find((u) => u._id == id);
    this.user = Object.assign({}, value);
    this.showPasswordForm = true;
  }

  async onPasswordChange(password: string) {
    this.loading = true;
    try {
      const resp = await this.userService.resetPassword(
        this.user._id,
        password
      ).toPromise();
      console.log(resp);      
      this.message = 'Password changed';
      this.showPasswordForm = false;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onClose() {
    this.user = null;
    this.showPasswordForm = false;
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }
}
