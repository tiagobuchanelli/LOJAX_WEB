import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  public busy = false;
  public form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      name_product: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],
      desc_product: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],
      cost_product: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],
      sale_product: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ]),],
      cat_product: [{ value: '', disabled: true }],
      status_product: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],

    });
  }

  ngOnInit(): void {
    /*this.form.controls['name'].setValue('João dos Santos');
    this.form.controls['phone'].setValue('55 - 996489002');
    this.form.controls['document'].setValue('017.828.630-36');
    this.form.controls['email'].setValue('joao@gmail.com');
    this.form.controls['address'].setValue('Rua Florianópolis, 1067 D');
    this.form.controls['city'].setValue('Chapecó - SC'); */

  }

}
