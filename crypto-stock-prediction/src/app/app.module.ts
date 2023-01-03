import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ShopComponent } from './Components/shop/shop.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { SignInComponent } from './Components/landing-page/sign-in/sign-in.component';
import { LoginComponent } from './Components/landing-page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    SettingsComponent,
    ShopComponent,
    SignInComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'home', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path:'shop', component: ShopComponent }
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
