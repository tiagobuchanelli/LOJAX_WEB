import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-products-transparent',
  templateUrl: './card-products-transparent.component.html',
  styleUrls: ['./card-products-transparent.component.css']
})
export class CardProductsTransparentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetails() {
    this.router.navigate(['/p/tv-4k/01']);
  }
}
