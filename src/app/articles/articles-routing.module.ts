import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';
import { ArticleFormComponent } from './article-form/article-form.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesListComponent
  },
  // {
  //   path: ':link',
  //   component: ArticlesDetailsComponent
  // },
  {
    path: 'create',
    component: ArticleFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
