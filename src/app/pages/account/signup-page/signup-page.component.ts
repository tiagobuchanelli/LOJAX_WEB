import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  public busy = false;
  public form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService

  ) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],
      document: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
    });
  }

  ngOnInit(): void {
  }

  submit() {
    console.log("Clicado em enviar");
  }

}
