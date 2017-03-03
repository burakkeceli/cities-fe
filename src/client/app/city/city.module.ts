import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CityComponent],
  exports: [CityComponent]
})
export class CityModule { }
