import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CajasComponent } from './cajas.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: CajasComponent }])],
  exports: [RouterModule],
})
export class CajasRoutingModule {}
