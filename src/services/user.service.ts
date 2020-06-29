import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { User } from 'src/shared/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private dataSource: RestDataService) {}

  userRegistration(user: User):Observable<User> {
    return this.dataSource.sendRequest('POST', 'api/users', user, false, null);
  }
}
