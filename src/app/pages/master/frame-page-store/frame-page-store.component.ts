import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-page-store',
  template: '<app-nav-bar-store></app-nav-bar-store><router-outlet></router-outlet>',
  styleUrls: ['./frame-page-store.component.css']
})
export class FramePageStoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
