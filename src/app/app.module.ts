import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { HomePageComponent } from './pages/store/home-page/home-page.component';
import { CardProductsDefaultComponent } from './components/shared/card-products-default/card-products-default.component';
import { CardProductsTransparentComponent } from './components/shared/card-products-transparent/card-products-transparent.component';
import { ProductsSmartphonesPageComponent } from './pages/store/products-smartphones-page/products-smartphones-page.component';
import { ProductsTvVideoPageComponent } from './pages/store/products-tv-video-page/products-tv-video-page.component';
import { ProductsComputersPageComponent } from './pages/store/products-computers-page/products-computers-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { NavBarStoreComponent } from './nav-bar-store/nav-bar-store.component';
import { FramePageStoreComponent } from './pages/master/frame-page-store/frame-page-store.component';
import { HomeDashboardPageComponent } from './pages/dashboard/home-dashboard-page/home-dashboard-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    FramePageComponent,
    HomePageComponent,
    CardProductsDefaultComponent,
    CardProductsTransparentComponent,
    ProductsSmartphonesPageComponent,
    ProductsTvVideoPageComponent,
    ProductsComputersPageComponent,
    CartPageComponent,
    ProfilePageComponent,
    NavBarStoreComponent,
    FramePageStoreComponent,
    HomeDashboardPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
