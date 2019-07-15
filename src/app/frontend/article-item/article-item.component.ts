import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.less']
})
export class ArticleItemComponent implements OnInit {
  @Input()
  data: object;
  constructor() {}

  ngOnInit() {}

}
