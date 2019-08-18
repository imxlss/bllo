import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface IHttpResponse {
  status: number;
  result: any;
}

interface IArticleList {
  page: number;
  pagesize: number;
}

interface IArticleDetail {
  _id: number;
}

const ARTICLE_LIST_API = `/article_list`;
const ARTICLE_DETAIL_API = `/article_detail`;
const REGISTER_API = `/register`;

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  PREFIX_API = `http://101.132.119.223:3000/mock/11/api`;

  constructor(private http: HttpClient) {}

  /**
   * 文章列表
   * @param params IArticleList
   */
  getArticleList(params: IArticleList): Observable<IHttpResponse> {
    const query = new HttpParams()
      .append('page', `${params.page}`)
      .append('pagesize', `${params.pagesize}`);

    return this.http
      .get<IHttpResponse>(this.PREFIX_API + ARTICLE_LIST_API, {
        params: query,
        withCredentials: true
      })
      .pipe(catchError(this.handleError<IHttpResponse>()));
  }

  /**
   * 文章详情
   * @param params IArticleDetail
   */
  articleDetailFor(params: IArticleDetail): Observable<IHttpResponse> {
    const query = new HttpParams().append('page', `${params._id}`);

    return this.http
      .get<IHttpResponse>(this.PREFIX_API + ARTICLE_DETAIL_API, {
        params: query,
        withCredentials: true
      })
      .pipe(catchError(this.handleError<IHttpResponse>()));
  }

  /**
   * 注册
   * @param params
   */
  register(params): Observable<IHttpResponse> {
    return this.http
      .post<IHttpResponse>(this.PREFIX_API + ARTICLE_LIST_API, params, {
        withCredentials: true
      })
      .pipe(catchError(this.handleError<IHttpResponse>()));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      // if 未登录 跳转到 登录页

      // error打印到控制台
      console.error(error);

      return of(result as T);
    };
  }
}
