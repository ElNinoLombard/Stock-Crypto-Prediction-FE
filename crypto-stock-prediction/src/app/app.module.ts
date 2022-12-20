import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ShopComponent } from './Components/shop/shop.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path:'shop', component: ShopComponent }
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
