import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'Cajas',
        data: { breadcrumb: 'Cajas' },
        loadChildren: () =>
          import('./cajas/cajas.module').then((m) => m.CajasModule),
      },
      {
        path: 'Consecutivos',
        data: { breadcrumb: 'Consecutivos' },
        loadChildren: () =>
          import('./consecutivos/consecutivos.module').then(
            (m) => m.ConsecutivosModule
          ),
      },
      {
        path: 'Paises',
        data: { breadcrumb: 'Paises' },
        loadChildren: () =>
          import('./paises/paises.module').then((m) => m.PaisesModule),
      },
      {
        path: 'Roles',
        data: { breadcrumb: 'Roles' },
        loadChildren: () =>
          import('./roles/roles.module').then((m) => m.RolesModule),
      },
      {
        path: 'Unidades-Medida',
        data: { breadcrumb: 'Unidades de Medida' },
        loadChildren: () =>
          import('./unidades-medida/unidades-medida.module').then(
            (m) => m.UnidadesMedidaModule
          ),
      },
      {
        path: 'Usuarios',
        data: { breadcrumb: 'Usuarios' },
        loadChildren: () =>
          import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
