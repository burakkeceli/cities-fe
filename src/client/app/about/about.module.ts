import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, LoginModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
