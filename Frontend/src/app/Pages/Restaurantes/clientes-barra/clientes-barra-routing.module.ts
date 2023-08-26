import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesBarraComponent } from './clientes-barra.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ClientesBarraComponent }]),
  ],
  exports: [RouterModule],
})
export class ClientesBarraRoutingModule {}
