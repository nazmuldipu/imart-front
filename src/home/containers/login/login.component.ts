import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: string = '';
  loading = false;
  showPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false],
    });
  }

  submit() {
    if (this.form.valid) {
      this.errorMessage = '';
      this.loading = true;
      console.log(this.form.value);
      
      setTimeout(() => {
        this.loading = false;
        this.form.reset();
      }, 2000);
    } else {
      this.errorMessage = 'Form data missing';
    }
  }
}
