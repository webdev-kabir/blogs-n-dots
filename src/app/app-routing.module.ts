import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '@shared/guards/auth.guard';
import { LayoutComponent } from "./core/layout/layout.component";

const childrenRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/articles'
  },

  {
    path: 'home',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },

  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  },
];
const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: '',
    component: LayoutComponent,
    children: childrenRoutes
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
