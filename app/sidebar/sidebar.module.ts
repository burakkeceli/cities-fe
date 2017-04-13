import { NgModule } from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { SidebarComponent } from './sidebar.component';
import { Component } from '@angular/core';

@NgModule({
  imports: [AccordionModule.forRoot()],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule { }
