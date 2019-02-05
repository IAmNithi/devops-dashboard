import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApphealthComponent } from './components/apphealth/apphealth.component';
import { ServicesComponent } from './components/services/services.component';
import { ApplicationTableComponent } from './components/application-table/application-table.component';
import { ServicesTableComponent } from './components/services-table/services-table.component';
import { DashboardComponent } from './application/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './application/signin/signin.component';
import { MarketplaceComponent } from './application/marketplace/marketplace.component';
import { MarketcardComponent } from './components/marketcard/marketcard.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  { path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    HeaderComponent,
    MenuComponent,
    ApphealthComponent,
    ServicesComponent,
    ApplicationTableComponent,
    ServicesTableComponent,
    DashboardComponent,
    SigninComponent,
    MarketplaceComponent,
    MarketcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
