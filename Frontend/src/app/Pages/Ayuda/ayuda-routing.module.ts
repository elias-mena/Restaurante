import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'Restaurantes',
        data: { breadcrumb: 'Restaurantes' },
        loadChildren: () =>
          import('./ayuda-restaurantes/ayuda-restaurantes.module').then(
            (m) => m.AyudaRestaurantesModule
          ),
      },
      {
        path: 'Seguridad',
        data: { breadcrumb: 'Seguridad' },
        loadChildren: () =>
          import('./ayuda-seguridad/ayuda-seguridad.module').then(
            (m) => m.AyudaSeguridadModule
          ),
      },
      {
        path: 'Sistema',
        data: { breadcrumb: 'Sistema' },
        loadChildren: () =>
          import('./ayuda-sistema/ayuda-sistema.module').then(
            (m) => m.AyudaSistemaModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AyudaRoutingModule {}
