import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'Empleados',
        data: { breadcrumb: 'Empleados' },
        loadChildren: () =>
          import('./empleados/empleados.module').then((m) => m.EmpleadosModule),
      },
      {
        path: 'Especiales',
        data: { breadcrumb: 'Especiales' },
        loadChildren: () =>
          import('./especiales/especiales.module').then(
            (m) => m.EspecialesModule
          ),
      },
      {
        path: 'Mesas',
        data: { breadcrumb: 'Mesas' },
        loadChildren: () =>
          import('./mesas/mesas.module').then((m) => m.MesasModule),
      },
      {
        path: 'Puestos',
        data: { breadcrumb: 'Puestos' },
        loadChildren: () =>
          import('./puestos/puestos.module').then((m) => m.PuestosModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}
