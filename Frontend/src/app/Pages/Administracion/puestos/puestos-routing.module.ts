import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PuestosComponent } from './puestos.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: PuestosComponent }])],
  exports: [RouterModule],
})
export class PuestosRoutingModule {}
