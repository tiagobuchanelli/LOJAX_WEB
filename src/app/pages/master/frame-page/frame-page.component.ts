import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-page',
  template: '<app-nav-bar></app-nav-bar><router-outlet></router-outlet>',
  styleUrls: ['./frame-page.component.css']
})
export class FramePageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
