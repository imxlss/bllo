import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/service/http.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  category: any; // 文章分类
  page: number = 1;
  total: number = 35;
  itemList: [];
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.category = res.param;
    });

    this.getArticleList();
  }

  getArticleList(page = 1, pagesize = 20) {
    this.loading = true;
    this.httpService
      .getArticleList({
        page,
        pagesize
      })
      .subscribe(res => {
        this.loading = false;
        this.itemList = res.result.data;
      });
  }
}
