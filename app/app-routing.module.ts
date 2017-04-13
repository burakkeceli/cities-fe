import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { CityGeneralComponent } from './city/general/city.general.component'


export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'city-general/:cityId', component: CityGeneralComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);