import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  breakpoint = 2;
  colsToRow = '2:1';
  innerWidth = window.innerWidth;
  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth < 950) {
      this.breakpoint = 1;
      this.colsToRow = '1:1';
    } else {
      this.breakpoint = 2;
      this.colsToRow = '2:1';
    }
  }
  onResize(event) {
    if (event.target.innerWidth < 950) {
      this.breakpoint = 1;
      this.colsToRow = '1:1';
    } else {
      this.breakpoint = 2;
      this.colsToRow = '2:1';
    }
  }
}
