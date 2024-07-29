import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';
import { MatIconModule } from '@angular/material/icon';
import { ArticleFormComponent } from './article-form/article-form.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticlesDetailsComponent,
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatIconModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule { }
