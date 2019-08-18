import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import marked from 'marked';
import { HttpService } from 'src/service/http.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit {
  _id: number;
  detail: object;
  markedHtml: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this._id = +res.id;
    });

    this.markedHtml = marked("```console.log('marked.')```");

    this.getArticleDetail(this._id);
  }

  getArticleDetail(_id: number) {
    this.httpService.articleDetailFor({ _id }).subscribe(res => {
      this.detail = res.result.content;
      console.log(res);
    });
  }
}
