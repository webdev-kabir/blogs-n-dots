import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edu-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent  implements OnInit {
  
  isChechked: number = 0;;

  constructor() {}

  ngOnInit() {
    
    
    setInterval(() => {

      function randomIntFromInterval() {
        let min = 1,
          max = 6;
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      this.isChechked = randomIntFromInterval();
    }, 2000);
  }
}
