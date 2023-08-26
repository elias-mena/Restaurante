import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'Dashboard/:id',
        data: { breadcrumb: 'Dashboard' },
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'Clientes',
        data: { breadcrumb: 'Clientes' },
        loadChildren: () =>
          import('./clientes/clientes.module').then((m) => m.ClientesModule),
      },
      {
        path: 'ClientesBarra',
        data: { breadcrumb: 'Clientes Barra' },
        loadChildren: () =>
          import('./clientes-barra/clientes-barra.module').then(
            (m) => m.ClientesBarraModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class RestaurantesRoutingModule {}
