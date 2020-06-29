import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestDataService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${environment.PORT}/`;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  // const req = new HttpRequest('POST', '/upload/file', file, {
  //   reportProgress: true
  // });
  public sendRequest(
    method: string,
    url: string,
    body?,
    auth: boolean = false,
    params?: HttpParams
  ): Observable<any> {
    // if no authentication required
    if (!auth) {
      const req = new HttpRequest(method, this.baseUrl + url, body, {
        params,
        responseType: 'json',
      });

      return this.http.request(req)
      .pipe(
        map((event) => {
          console.log(event);
          return event['body'];
        })
      );
    }
  }
}
