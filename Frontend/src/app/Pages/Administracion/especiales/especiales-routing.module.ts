import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BebidasComponent } from './bebidas.component';
import { BuffetComponent } from './buffet.component';
import { EspecialidadesComponent } from './especialidades.component';
import { GaseosasComponent } from './gaseosas.component';
import { LicoresComponent } from './licores.component';
import { VinosComponent } from './vinos.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'Bebidas', component: BebidasComponent },
      { path: 'Buffet', component: BuffetComponent },
      { path: 'Especialidades', component: EspecialidadesComponent },
      { path: 'Gaseosas', component: GaseosasComponent },
      { path: 'Licores', component: LicoresComponent },
      { path: 'Vinos', component: VinosComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class EspecialesRoutingModule {}
