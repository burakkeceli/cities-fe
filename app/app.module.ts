import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';

import { CityGeneralComponent } from './city/general/city.general.component'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { CitySearchService } from './service/city/city-search.service';
import { ConstantService } from './service/constant/constant.service';
import { AuthenticationService } from './service/authentication/authentication.service';
import { CountrySearchService } from './service/country/country-search.service';
import { CommentService } from './service/comment/comment.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, 
    AboutComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    CityGeneralComponent
  ],
  imports: [
    HttpModule,
    routes,
    BrowserModule,
    FormsModule,
    RouterModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
      {provide: APP_BASE_HREF, useValue : '/'},
      {provide: LocationStrategy, useClass: HashLocationStrategy},
      CitySearchService, 
      AuthenticationService,
      CountrySearchService,
      CommentService,
      ConstantService
    ],
  bootstrap: [AppComponent],
  exports: []
})

export class AppModule {
}