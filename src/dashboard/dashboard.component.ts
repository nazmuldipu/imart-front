import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  
  sideNavExpand = true;
  user;

  constructor(public userService: UserService) {}
  
  ngOnInit(): void {
    this.userService.getUserProfile();
    this.userService.user$.subscribe(data=>{
      this.user = data;
    })
  }
  
  onSidenavExpand(event) {
    this.sideNavExpand = event;
  }
}
