import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // PREFIX_API = `http://localhost:8080/api`;
  // PREFIX_API = `http://xlss.link/api`;
  PREFIX_API = `http://yapi.demo.qunar.com/mock/29990/api`;

  constructor(private http: HttpClient) {}

  public post(api, params: any) {
    const _this = this;
    const headers = new HttpHeaders().set('Content-Type', 'text/plain');
    return Observable.create(observer => {
      _this.http
        .post(_this.PREFIX_API + api, params, {
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
          () => {}
        );
    });
  }

  public get(api, params?: object) {
    const _this = this;
    if (params) {
      let p = '?';
      for (const key of Object.keys(params)) {
        p += key + '=' + params[key] + '&';
      }
      api += p.substr(0, p.length - 1);
    }

    return Observable.create(observer => {
      _this.http
        .get(_this.PREFIX_API + api, { withCredentials: true })
        .subscribe(
          (res: any) => {
            observer.next(res);
          },
          err => {
            observer.error(err);
          },
          () => {}
        );
    });
  }
}
