
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { of } from 'rxjs';


@Injectable()
export class HttpInterceptor {

    constructor(
        private http: HttpClient) { }

    public getCall(url: string): Observable<any> {
        return this.http.get(url)
            .pipe(
                map((resp: any) => {
                    return resp;
                }),
                catchError(this.handleError)
            );
    }

    public postCall(url: string, payload: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(url, payload, httpOptions)
            .pipe(
                map((resp: any) => {
                    return resp
                }),
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
        try {
            if (error.error.error) {
                return throwError(error.error.error);
            }
            return throwError({ "errorMsg": "Sorry! Something went wrong" });
        } catch (error) {
            return throwError({ "errorMsg": "Sorry! Something went wrong" });
        }
    }
}
