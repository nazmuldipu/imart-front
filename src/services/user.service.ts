import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { User } from 'src/shared/models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl = 'api/users';

  private _userSource = new BehaviorSubject<User>({} as User);
  user$ = this._userSource.asObservable();

  constructor(private dataSource: RestDataService) {}

  userRegistration(user: User): Observable<User> {
    return this.dataSource.sendRequest('POST', this.userUrl, user, false, null);
  }

  getUserProfile() {
    this.dataSource
      .sendRequest('GET', this.userUrl + '/me', null, true, null)
      .pipe(take(2))
      .subscribe(
        (data) => {
          this._userSource.next(data);
        },
        (error) => {
          console.log('getUserProfile ERROR');
          console.log(error);
        }
      );
  }
}
