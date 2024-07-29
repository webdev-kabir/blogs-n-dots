import { Component } from '@angular/core';

@Component({
  selector: 'edu-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.scss']
})
export class ArticlesDetailsComponent {
  articles =
    {
      id: 1,
      date: 'September 08, 2019',
      title: 'Advanced Angular Techniques',
      author:'Kabir Hasan',
      summary: 'An overview of code splitting and lazy loading techniques for improving performance in server-side rendered React applications.',
      content: `
      <p>Code splitting and lazy loading are techniques used to optimize the performance of React applications by loading only the necessary code. This article explores these techniques in detail, providing examples and best practices.</p>
      <h2>Introduction</h2>
      <p>React is a powerful library for building user interfaces, but large applications can suffer from performance issues due to the amount of JavaScript that needs to be loaded. Code splitting and lazy loading are solutions that help address these issues by splitting your code into smaller chunks and loading them on demand.</p>
      <h2>Code Splitting</h2>
      <p>Code splitting allows you to split your code into smaller chunks that can be loaded asynchronously. This means that users only download the code they need for the features they are using, leading to faster initial load times.</p>
      <h2>Lazy Loading</h2>
      <p>Lazy loading is a technique where components or modules are loaded only when they are needed. This helps to reduce the initial load time and improves the overall performance of the application.</p>
      <h2>Conclusion</h2>
      <p>Implementing code splitting and lazy loading can significantly improve the performance of your React applications. By following the best practices outlined in this article, you can ensure a better user experience and faster load times.</p>
      <pre class="ql-syntax" spellcheck="false">asddsdxexasds </pre>
      `,
      link: '/articles/code-splitting-lazy-loading'
    }

}
