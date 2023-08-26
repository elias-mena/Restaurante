import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './Layout/layout/layout.component';
import { LoginComponent } from './Pages/Login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LayoutComponent,
          children: [
            {
              path: 'Administracion',
              loadChildren: () =>
                import('./Pages/Administracion/administracion.module').then(
                  (m) => m.AdministracionModule
                ),
            },
            {
              path: 'Restaurantes',
              loadChildren: () =>
                import('./Pages/Restaurantes/restaurantes.module').then(
                  (m) => m.RestaurantesModule
                ),
            },
            {
              path: 'Ayuda',
              loadChildren: () =>
                import('./Pages/Ayuda/ayuda.module').then((m) => m.AyudaModule),
            },
            {
              path: 'Proveedores',
              loadChildren: () =>
                import('./Pages/Proveedores/proveedores.module').then(
                  (m) => m.ProveedoresModule
                ),
            },
            {
              path: 'Reportes',
              loadChildren: () =>
                import('./Pages/Reportes/reportes.module').then(
                  (m) => m.ReportesModule
                ),
            },
            {
              path: 'Seguridad',
              loadChildren: () =>
                import('./Pages/Seguridad/seguridad.module').then(
                  (m) => m.SeguridadModule
                ),
            },
          ],
        },
        {
          path: 'Login',
          loadChildren: () =>
            import('./Pages/Login/login.module').then((m) => m.LoginModule),
        },
        {
          path: 'Registro',
          loadChildren: () =>
            import('./Pages/registro/registro.module').then(
              (m) => m.RegistroModule
            ),
        },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
