import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyudaSistemaRoutingModule } from './ayuda-sistema-routing.module';
import { AyudaSistemaComponent } from './ayuda-sistema.component';

@NgModule({
  declarations: [AyudaSistemaComponent],
  imports: [CommonModule, AyudaSistemaRoutingModule],
})
export class AyudaSistemaModule {}
