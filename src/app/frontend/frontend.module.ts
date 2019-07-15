import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FrontendComponent } from './frontend.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const frontRoutes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      { path: '', component: ArticleListComponent },
      {
        path: 'article/:param',
        component: ArticleListComponent
      },
      {
        path: 'detail/:id',
        component: ArticleDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    FrontendComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [CommonModule, NgZorroAntdModule, RouterModule.forChild(frontRoutes)]
})
export class FrontendModule {}
