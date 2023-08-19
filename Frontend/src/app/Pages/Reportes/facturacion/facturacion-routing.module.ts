import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacturacionComponent } from './facturacion.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: FacturacionComponent }]),
  ],
  exports: [RouterModule],
})
export class FacturacionRoutingModule {}
