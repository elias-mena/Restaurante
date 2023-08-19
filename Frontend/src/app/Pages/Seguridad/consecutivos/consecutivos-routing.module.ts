import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsecutivosComponent } from './consecutivos.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ConsecutivosComponent }]),
  ],
  exports: [RouterModule],
})
export class ConsecutivosRoutingModule {}
