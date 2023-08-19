import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'Bitacora',
        data: { breadcrumb: 'Bitacora' },
        loadChildren: () =>
          import('./bitacora/bitacora.module').then((m) => m.BitacoraModule),
      },
      {
        path: 'Clientes',
        data: { breadcrumb: 'Clientes' },
        loadChildren: () =>
          import('./clientes/clientes.module').then((m) => m.ClientesModule),
      },
      {
        path: 'Facturacion',
        data: { breadcrumb: 'Facturacion' },
        loadChildren: () =>
          import('./facturacion/facturacion.module').then(
            (m) => m.FacturacionModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ReportesRoutingModule {}
