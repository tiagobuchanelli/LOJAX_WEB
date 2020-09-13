import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { HomePageComponent } from './pages/store/home-page/home-page.component';
import { ProductsWirelessSmartphonesComponent } from './pages/store/departments/products-wireless-smartphones/products-wireless-smartphones.component';
import { ProductsPcAllPageComponent } from './pages/store/departments/products-pc-all-page/products-pc-all-page.component';
import { ProductsElectronicsTvVideoComponent } from './pages/store/departments/products-electronics-tv-video/products-electronics-tv-video.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { HomeDashboardPageComponent } from './pages/dashboard/home-dashboard-page/home-dashboard-page.component';
import { FramePageStoreComponent } from './pages/master/frame-page-store/frame-page-store.component';
import { ProductsHouseholdApplianceComponent } from './pages/store/departments/products-household-appliance/products-household-appliance.component';
import { ProductsHomeFurnitureComponent } from './pages/store/departments/products-home-furniture/products-home-furniture.component';
import { ProductsHomeDecorComponent } from './pages/store/departments/products-home-decor/products-home-decor.component';
import { ProductsHomeCamebaComponent } from './pages/store/departments/products-home-cameba/products-home-cameba.component';
import { ProductsHomeAllComponent } from './pages/store/departments/products-home-all/products-home-all.component';
import { ProductsWirelessAllComponent } from './pages/store/departments/products-wireless-all/products-wireless-all.component';
import { ProductsWirelessTabletComponent } from './pages/store/departments/products-wireless-tablet/products-wireless-tablet.component';
import { ProductsWirelessAcessoriesComponent } from './pages/store/departments/products-wireless-acessories/products-wireless-acessories.component';
import { ProductsWirelessChargerComponent } from './pages/store/departments/products-wireless-charger/products-wireless-charger.component';
import { ProductsElectronicsAllComponent } from './pages/store/departments/products-electronics-all/products-electronics-all.component';
import { ProductsElectronicsAudioPortComponent } from './pages/store/departments/products-electronics-audio-port/products-electronics-audio-port.component';
import { ProductsPcLaptopsComponent } from './pages/store/departments/products-pc-laptops/products-pc-laptops.component';
import { ProductsPcGamerComponent } from './pages/store/departments/products-pc-gamer/products-pc-gamer.component';
import { ProductsPcMonitorsComponent } from './pages/store/departments/products-pc-monitors/products-pc-monitors.component';
import { ProductsPcComponentsConnectionComponent } from './pages/store/departments/products-pc-components-connection/products-pc-components-connection.component';
import { BalanceComponent } from './pages/dashboard/balance/balance.component';
import { ChartsComponent } from './pages/dashboard/charts/charts.component';
import { CostumersComponent } from './pages/dashboard/costumers/costumers.component';
import { FinanceArComponent } from './pages/dashboard/finance-ar/finance-ar.component';
import { PaymentComponent } from './pages/dashboard/payment/payment.component';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import { ProductsCategoryComponent } from './pages/dashboard/products-category/products-category.component';
import { ProductsInactiveComponent } from './pages/dashboard/products-inactive/products-inactive.component';
import { ProductsStockComponent } from './pages/dashboard/products-stock/products-stock.component';
import { ProductsStockMovComponent } from './pages/dashboard/products-stock-mov/products-stock-mov.component';
import { SalesComponent } from './pages/dashboard/sales/sales.component';
import { SalesByCostumersComponent } from './pages/dashboard/sales-by-costumers/sales-by-costumers.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { ProductsAddComponent } from './pages/dashboard/products-add/products-add.component';
import { ProductsCategoryAddComponent } from './pages/dashboard/products-category-add/products-category-add.component';
import { UsersAddComponent } from './pages/dashboard/users-add/users-add.component';
import { CostumersAddComponent } from './pages/dashboard/costumers-add/costumers-add.component';
import { MyAccountComponent } from './pages/dashboard/my-account/my-account.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { ProductDetailsPageComponent } from './pages/store/product-details-page/product-details-page.component';
import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component';



const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    //canActivate: [AuthService],
    children: [
      { path: '', component: HomePageComponent },
      { path: 'p/:name/:id', component: ProductDetailsPageComponent }
    ]
  },

  //Categorias
  {
    path: 'c',
    component: FramePageComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'informatica', component: ProductsPcAllPageComponent },
      { path: 'casa', component: ProductsHomeAllComponent },
      { path: 'smartphones-e-comunicacao', component: ProductsWirelessAllComponent },
      { path: 'eletronicos', component: ProductsElectronicsAllComponent },

    ]
  },

  //Subcategorias
  {
    path: 'sc',
    component: FramePageComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'celulares-e-smartphones', component: ProductsWirelessSmartphonesComponent },
      { path: 'tablets', component: ProductsWirelessTabletComponent },
      { path: 'acessorios', component: ProductsWirelessAcessoriesComponent },
      { path: 'carregadores', component: ProductsWirelessChargerComponent },
      { path: 'tv-e-video', component: ProductsElectronicsTvVideoComponent },
      { path: 'audio', component: ProductsElectronicsAudioPortComponent },
      { path: 'eletrodomesticos', component: ProductsHouseholdApplianceComponent },
      { path: 'moveis', component: ProductsHomeFurnitureComponent },
      { path: 'decoracao', component: ProductsHomeDecorComponent },
      { path: 'cama-mesa-banho', component: ProductsHomeCamebaComponent },
      { path: 'notebooks', component: ProductsPcLaptopsComponent },
      { path: 'pc-gamer', component: ProductsPcGamerComponent },
      { path: 'monitores', component: ProductsPcMonitorsComponent },
      { path: 'pecas-e-componentes', component: ProductsPcComponentsConnectionComponent },
    ]
  },

  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path: '', component: ProfilePageComponent },
      { path: 'cart', component: CartPageComponent },
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
      { path: 'balance', component: BalanceComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'costumers', component: CostumersComponent },
      { path: 'costumers-add', component: CostumersAddComponent },
      { path: 'finance-ar', component: FinanceArComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products-add', component: ProductsAddComponent },
      { path: 'products-category', component: ProductsCategoryComponent },
      { path: 'products-category-add', component: ProductsCategoryAddComponent },
      { path: 'products-inactive', component: ProductsInactiveComponent },
      { path: 'products-stock', component: ProductsStockComponent },
      { path: 'products-stock-mov', component: ProductsStockMovComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'sales-by-costumers', component: SalesByCostumersComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users-add', component: UsersAddComponent },
      { path: 'my-account', component: MyAccountComponent },
      { path: 'settings', component: SettingsComponent },


    ]
  },

  /*Página 404*/
  {
    path: '',
    component: FramePageComponent,
    //canActivate: [AuthService],
    children: [
      { path: '**', component: FourZeroFourComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*celulares, te-video informatica */