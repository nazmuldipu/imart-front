import { Injectable } from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { RestDataService } from './rest-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User;

  constructor(private datasource: RestDataService) {}

  authenticate(phone: string, password: string): Observable<any> {
    return this.datasource.obtainToken(phone, password);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(){
    localStorage.clear();
  }
}
