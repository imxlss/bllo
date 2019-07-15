import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.less']
})
export class FrontendComponent implements OnInit {
  navText = [
    { link: '', text: '首页' },
    { link: 'article/angular', text: 'Navigation One' },
    { link: 'article/rxjs', text: 'Navigation Two' },
    { link: 'article/nodejs', text: 'Navigation Three' }
    // { link: '/archives', text: '时间轴' }
  ];

  backButtonStyle = {
    left: 0,
    top: 0
  };

  constructor() {}

  ngOnInit() {
    this.backButtonStyle.left = Math.random() * 100;
    this.backButtonStyle.top = Math.random() * 190;
    console.log(this.backButtonStyle);
  }
}
