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
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { HomePageComponent } from './pages/store/home-page/home-page.component';
import { CardProductsDefaultComponent } from './components/shared/card-products-default/card-products-default.component';
import { CardProductsTransparentComponent } from './components/shared/card-products-transparent/card-products-transparent.component';
import { ProductsPcAllPageComponent } from './pages/store/departments/products-pc-all-page/products-pc-all-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { NavBarStoreComponent } from './components/nav-bar-store/nav-bar-store.component';
import { FramePageStoreComponent } from './pages/master/frame-page-store/frame-page-store.component';
import { HomeDashboardPageComponent } from './pages/dashboard/home-dashboard-page/home-dashboard-page.component';
import { ProductsHouseholdApplianceComponent } from './pages/store/departments/products-household-appliance/products-household-appliance.component';
import { ProductsHomeFurnitureComponent } from './pages/store/departments/products-home-furniture/products-home-furniture.component';
import { ProductsHomeDecorComponent } from './pages/store/departments/products-home-decor/products-home-decor.component';
import { ProductsHomeCamebaComponent } from './pages/store/departments/products-home-cameba/products-home-cameba.component';
import { ProductsHomeAllComponent } from './pages/store/departments/products-home-all/products-home-all.component';
import { ProductsWirelessAllComponent } from './pages/store/departments/products-wireless-all/products-wireless-all.component';
import { ProductsWirelessTabletComponent } from './pages/store/departments/products-wireless-tablet/products-wireless-tablet.component';
import { ProductsWirelessSmartphonesComponent } from './pages/store/departments/products-wireless-smartphones/products-wireless-smartphones.component';
import { ProductsWirelessAcessoriesComponent } from './pages/store/departments/products-wireless-acessories/products-wireless-acessories.component';
import { ProductsWirelessChargerComponent } from './pages/store/departments/products-wireless-charger/products-wireless-charger.component';
import { ProductsElectronicsAllComponent } from './pages/store/departments/products-electronics-all/products-electronics-all.component';
import { ProductsElectronicsAudioPortComponent } from './pages/store/departments/products-electronics-audio-port/products-electronics-audio-port.component';
import { ProductsElectronicsTvVideoComponent } from './pages/store/departments/products-electronics-tv-video/products-electronics-tv-video.component';
import { ProductsPcLaptopsComponent } from './pages/store/departments/products-pc-laptops/products-pc-laptops.component';
import { ProductsPcMonitorsComponent } from './pages/store/departments/products-pc-monitors/products-pc-monitors.component';
import { ProductsPcGamerComponent } from './pages/store/departments/products-pc-gamer/products-pc-gamer.component';
import { ProductsPcComponentsConnectionComponent } from './pages/store/departments/products-pc-components-connection/products-pc-components-connection.component';
import { CostumersComponent } from './pages/dashboard/costumers/costumers.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { PaymentComponent } from './pages/dashboard/payment/payment.component';
import { BalanceComponent } from './pages/dashboard/balance/balance.component';
import { FinanceArComponent } from './pages/dashboard/finance-ar/finance-ar.component';
import { SalesComponent } from './pages/dashboard/sales/sales.component';
import { SalesByCostumersComponent } from './pages/dashboard/sales-by-costumers/sales-by-costumers.component';
import { ChartsComponent } from './pages/dashboard/charts/charts.component';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import { ProductsCategoryComponent } from './pages/dashboard/products-category/products-category.component';
import { ProductsStockComponent } from './pages/dashboard/products-stock/products-stock.component';
import { ProductsStockMovComponent } from './pages/dashboard/products-stock-mov/products-stock-mov.component';
import { ProductsInactiveComponent } from './pages/dashboard/products-inactive/products-inactive.component';
import { ProductsAddComponent } from './pages/dashboard/products-add/products-add.component';
import { ProductsCategoryAddComponent } from './pages/dashboard/products-category-add/products-category-add.component';
import { UsersAddComponent } from './pages/dashboard/users-add/users-add.component';
import { CostumersAddComponent } from './pages/dashboard/costumers-add/costumers-add.component';
import { MyAccountComponent } from './pages/dashboard/my-account/my-account.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { CardProductsCustomComponent } from './components/shared/card-products-custom/card-products-custom.component';
import { ProductDetailsPageComponent } from './pages/store/product-details-page/product-details-page.component';
import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component';
import { RouterModule } from '@angular/router';



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
    ProductsWirelessSmartphonesComponent,
    ProductsElectronicsTvVideoComponent,
    ProductsPcAllPageComponent,
    CartPageComponent,
    ProfilePageComponent,
    NavBarStoreComponent,
    FramePageStoreComponent,
    HomeDashboardPageComponent,
    ProductsHouseholdApplianceComponent,
    ProductsHomeFurnitureComponent,
    ProductsHomeDecorComponent,
    ProductsHomeCamebaComponent,
    ProductsHomeAllComponent,
    ProductsWirelessAllComponent,
    ProductsWirelessTabletComponent,
    ProductsWirelessAcessoriesComponent,
    ProductsWirelessChargerComponent,
    ProductsElectronicsAllComponent,
    ProductsElectronicsAudioPortComponent,
    ProductsPcLaptopsComponent,
    ProductsPcMonitorsComponent,
    ProductsPcGamerComponent,
    ProductsPcComponentsConnectionComponent,
    CostumersComponent,
    UsersComponent,
    PaymentComponent,
    BalanceComponent,
    FinanceArComponent,
    SalesComponent,
    SalesByCostumersComponent,
    ChartsComponent,
    ProductsComponent,
    ProductsCategoryComponent,
    ProductsStockComponent,
    ProductsStockMovComponent,
    ProductsInactiveComponent,
    ProductsAddComponent,
    ProductsCategoryAddComponent,
    UsersAddComponent,
    CostumersAddComponent,
    MyAccountComponent,
    SettingsComponent,
    CardProductsCustomComponent,
    ProductDetailsPageComponent,
    FourZeroFourComponent,
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
