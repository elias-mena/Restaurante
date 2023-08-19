import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AyudaSistemaComponent } from './ayuda-sistema.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: AyudaSistemaComponent }]),
  ],
  exports: [RouterModule],
})
export class AyudaSistemaRoutingModule {}
