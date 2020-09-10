import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { HomePageComponent } from './pages/store/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    //canActivate: [AuthService],
    children: [
      { path: '', component: HomePageComponent },
      //{ path: 'cart', component: CartPageComponent },
      //{ path: 'checkout', component: CheckoutPageComponent }
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      //{ path: '', component: ProfilePageComponent },
      //{ path: 'pets', component: PetsPageComponent },
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
