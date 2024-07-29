import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edu-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  projectArray:any = [
    {
      id:'ci-cd',
      image: '../assets/imagesList/cloud-monitoring/1.png',
      projectName: 'CI-CD Pipeline Project',
      tech: 'Angular, Material-ui, Tailwind',
      details: 'This project was to automate the CI-CD process of a software development lifecycle'
    },
    {
      id:'multicluster',
      image: '../assets/imagesList/cloud-monitoring/2.png',
      projectName: 'Multicluster Project',
      tech: 'Angular, Material-ui, Tailwind, Node',
      details: 'This project was to automate the CI-CD process of a software development lifecycle'
    },
    {
      id:'kubernetes',
      image: '../assets/imagesList/cloud-monitoring/3.png',
      projectName: 'Kubernetes Project',
      tech: 'Angular, Material-ui, Chart.js',
      details: 'This project was to automate the CI-CD process of a software development lifecycle'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('here');
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}
