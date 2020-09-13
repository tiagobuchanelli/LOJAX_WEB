import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-products-custom',
  templateUrl: './card-products-custom.component.html',
  styleUrls: ['./card-products-custom.component.css']
})
export class CardProductsCustomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetails() {
    this.router.navigate(['/p/tv-4k/01']);
  }

}
