import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ArticleReleaseComponent } from './article-release/article-release.component';
import { BackendComponent } from './backend.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const backRoutes: Routes = [
  {
    path: '',
    component: BackendComponent,
    children: [
      { path: '', redirectTo: 'release', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'release', component: ArticleReleaseComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ArticleReleaseComponent,
    BackendComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule.forChild(backRoutes)
  ]
})
export class BackendModule {}
