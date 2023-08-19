import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AyudaRestaurantesComponent } from './ayuda-restaurantes.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: AyudaRestaurantesComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AyudaRestaurantesRoutingModule {}
