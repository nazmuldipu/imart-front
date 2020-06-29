import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.auth.logout();
  }

}
