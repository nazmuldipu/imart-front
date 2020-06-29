import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errorMessage: string = '';
  regSuccess = false;
  loading = false;
  showPassword = false;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    if (this.form.valid) {
      this.errorMessage = '';
      this.loading = true;
      this.userService.userRegistration(this.form.value).subscribe(
        (data) => {
          if (data) {
            this.loading = false;            
            this.regSuccess = true;
            this.form.reset();
          }
        },
        (err) => {
          if (err) {
            this.loading = false;            
            this.errorMessage = 'Error : ' + err.status + ': ' + err.error;
          }
        }
      );
    } else {
      this.errorMessage = 'Form data missing';
    }
  }
}
