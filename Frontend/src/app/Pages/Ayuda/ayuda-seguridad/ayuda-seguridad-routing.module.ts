import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AyudaSeguridadComponent } from './ayuda-seguridad.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: AyudaSeguridadComponent }]),
  ],
  exports: [RouterModule],
})
export class AyudaSeguridadRoutingModule {}
