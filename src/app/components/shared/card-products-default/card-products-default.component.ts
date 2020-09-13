import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-products-default',
  templateUrl: './card-products-default.component.html',
  styleUrls: ['./card-products-default.component.css']
})
export class CardProductsDefaultComponent implements OnInit {

  //@Input() productId: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  viewDetails() {
    this.router.navigate(['/p/tv-4k/01']);
  }




}
