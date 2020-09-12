import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { HomePageComponent } from './pages/store/home-page/home-page.component';
import { ProductsSmartphonesPageComponent } from './pages/store/products-smartphones-page/products-smartphones-page.component';
import { ProductsComputersPageComponent } from './pages/store/products-computers-page/products-computers-page.component';
import { ProductsTvVideoPageComponent } from './pages/store/products-tv-video-page/products-tv-video-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { HomeDashboardPageComponent } from './pages/dashboard/home-dashboard-page/home-dashboard-page.component';
import { FramePageStoreComponent } from './pages/master/frame-page-store/frame-page-store.component';



const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    //canActivate: [AuthService],
    children: [
      { path: '', component: HomePageComponent },
      { path: 'celulares-e-smartphones', component: ProductsSmartphonesPageComponent },
      { path: 'tv-e-video', component: ProductsTvVideoPageComponent },
      { path: 'informatica', component: ProductsComputersPageComponent },
      { path: 'cart', component: CartPageComponent },
      //{ path: 'checkout', component: CheckoutPageComponent }
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path: '', component: ProfilePageComponent },
      //{ path: 'pets', component: PetsPageComponent },
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },
  {
    path: 'dashboard',
    component: FramePageStoreComponent,
    children: [
      { path: '', component: HomeDashboardPageComponent },
      //{ path: 'pets', component: PetsPageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*celulares, te-video informatica */