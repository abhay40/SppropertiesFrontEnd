import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { of } from 'rxjs';
import { HttpInterceptor } from './services/http-interceptors';
import { Property } from "./property";


@Injectable()
export class AppService {

  private Url = "http://localhost:8090/";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpInterceptor: HttpInterceptor, private httpClient: HttpClient) { }


  getProperties() {
    return this.httpInterceptor.getCall(this.Url + "properties");
  }

  addProperty(property) {
    return this.httpClient.post<any>(this.Url + "property", property, this.httpOptions);
  }

  DeleteProperty(id: number) {
    return this.httpClient.delete<any>(this.Url + "property" + "/" + id);

  }

  UpdateProperty(property) { 
      return this.httpClient.put<void>(this.Url+ "property",property);
  }

  getPropertiesById(id: number) {
    return this.httpInterceptor.getCall(this.Url + "property" + "/" + id);
  }






}
