import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MesasComponent } from './mesas.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: MesasComponent }])],
  exports: [RouterModule],
})
export class MesasRoutingModule {}
