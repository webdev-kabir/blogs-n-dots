import { Component } from '@angular/core';

@Component({
  selector: 'edu-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {
  articles = [
    {
      id: 1,
      date: 'September 08, 2019',
      title: 'Code splitting & lazy loading a server side rendered React app',
      summary: 'Reasoning, approach, and goals. Faster initial load times. Users only download the code they need for the features they are using.',
      link: '/read-more-and-more'
    },
    {
      id: 2,
      date: 'October 15, 2019',
      title: 'Introduction to Angular',
      summary: 'A comprehensive guide to Angular for beginners. Covers basic concepts, features, and practical tips.',
      link: '/introduction-to-angular'
    },
    {
      id: 3,
      date: 'November 22, 2019',
      title: 'Advanced Angular Techniques',
      summary: 'Deep dive into advanced Angular concepts such as change detection, lazy loading, and performance optimization.',
      link: '/advanced-angular-techniques'
    },
    {
      id: 4,
      date: 'December 30, 2019',
      title: 'Building Scalable Applications with Angular',
      summary: 'Best practices and architectural patterns for creating scalable and maintainable Angular applications.',
      link: '/building-scalable-applications'
    },
    {
      id: 5,
      date: 'January 05, 2020',
      title: 'Getting Started with TypeScript',
      summary: 'An introduction to TypeScript, its features, and how it integrates with Angular for better development experience.',
      link: '/getting-started-with-typescript'
    }
  ];
}
