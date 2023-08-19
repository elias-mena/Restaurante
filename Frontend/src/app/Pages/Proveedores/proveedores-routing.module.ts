import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'Marcas',
        data: { breadcrumb: 'Marcas' },
        loadChildren: () =>
          import('./marcas/marcas.module').then((m) => m.MarcasModule),
      },
      {
        path: 'Productos',
        data: { breadcrumb: 'Productos' },
        loadChildren: () =>
          import('./productos/productos.module').then((m) => m.ProductosModule),
      },
      {
        path: 'Proveedores',
        data: { breadcrumb: 'Proveedores' },
        loadChildren: () =>
          import('./proveedores/proveedores.module').then(
            (m) => m.ProveedoresModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProveedoresRoutingModule {}
