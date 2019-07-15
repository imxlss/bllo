import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'front', pathMatch: 'full' },
  { path: 'front', loadChildren: './frontend/frontend.module#FrontendModule' },
  { path: 'back', loadChildren: './backend/backend.module#BackendModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
