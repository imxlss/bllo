import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import marked from 'marked';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit {
  _id: string;
  data: object;
  markedHtml: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CommonService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this._id = res.id;
    });

    this.markedHtml = marked("```console.log('marked.')```");

    this.getArticleDetail(this._id);
  }

  getArticleDetail(_id: string) {
    this.service.get('/article_detail', { id: _id }).subscribe(res => {
      this.data = res.data;
      console.log(res);
    });
  }
}
