import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyudaRestaurantesRoutingModule } from './ayuda-restaurantes-routing.module';
import { AyudaRestaurantesComponent } from './ayuda-restaurantes.component';

@NgModule({
  declarations: [AyudaRestaurantesComponent],
  imports: [CommonModule, AyudaRestaurantesRoutingModule],
})
export class AyudaRestaurantesModule {}
