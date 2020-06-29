import {
  HttpClient,
  HttpParams,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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

  obtainToken(phone: string, password: string): Observable<any> {
    const value = { phone, password };
    return this.http
      .post<any>(this.baseUrl + 'api/auth', value, {
        responseType: 'json',
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`; // Client-side errors
    } else {
      errorMessage = `Error Code: ${error.status}\n Message: ${error.error}`; // Server-side errors
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }

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

      return this.http.request(req).pipe(
        map((event) => {
          return event['body'];
        })
      );
    }
  }
}
