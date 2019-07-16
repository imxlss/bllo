import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface IHttpResponse {
  status: number
}

interface IArticleList {
  page: number,
  pagesize: number
}

const ARTICLE_LIST_API = `/article_list`;
const REGISTER_API = `/register`;


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  PREFIX_API = `http://yapi.demo.qunar.com/mock/29990/api`;

  constructor(private http: HttpClient) { }

  getArticleList(params: IArticleList): Observable<IHttpResponse> {

    const query = new HttpParams()
      .append('page', `${params.page}`)
      .append('pagesize', `${params.pagesize}`);

    return this.http.get<IHttpResponse>(this.PREFIX_API + ARTICLE_LIST_API, { params: query, withCredentials: true })
      .pipe(catchError(this.handleError<IHttpResponse>()))
  }

  register(params): Observable<IHttpResponse> {
    return this.http.post<IHttpResponse>(this.PREFIX_API + ARTICLE_LIST_API, params, { withCredentials: true })
      .pipe(catchError(this.handleError<IHttpResponse>()))
  }


  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      // if 未登录 跳转到 登录页

      // error打印到控制台
      console.error(error);

      return of(result as T);
    }

  }


}
