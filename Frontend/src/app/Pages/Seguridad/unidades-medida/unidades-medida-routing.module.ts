import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnidadesMedidaComponent } from './unidades-medida.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: UnidadesMedidaComponent }]),
  ],
  exports: [RouterModule],
})
export class UnidadesMedidaRoutingModule {}
