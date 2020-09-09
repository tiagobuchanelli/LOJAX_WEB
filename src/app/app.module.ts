import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    FramePageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
