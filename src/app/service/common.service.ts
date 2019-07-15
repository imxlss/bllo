import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // PREFIX_API = `http://localhost:8080/api`;
  PREFIX_API = `http://yapi.demo.qunar.com/mock/29990/api`;

  constructor(private http: HttpClient) { }

  public postData(api: string, params: any) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain');
    return Observable.create(observer => {
      this.http
        .post(this.PREFIX_API + api, params, {
          headers,
          withCredentials: true
        })
        .subscribe(
          (res: any) => {
            observer.next(res);
          },
          err => {
            observer.error(err);
          },
          () => { }
        );
    });
  }

  public getData(api: string, params?: object) {
    if (params) {
      let p = '?';
      for (const key of Object.keys(params)) {
        p += key + '=' + params[key] + '&';
      }
      api += p.substring(0, p.length - 1);
    }

    return Observable.create(observer => {
      this.http
        .get(this.PREFIX_API + api, { withCredentials: true })
        .subscribe(
          (res: any) => {
            observer.next(res);
          },
          err => {
            observer.error(err);
          },
          () => { }
        );
    });
  }
}
