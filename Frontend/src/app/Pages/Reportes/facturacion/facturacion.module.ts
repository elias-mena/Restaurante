import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionRoutingModule } from './facturacion-routing.module';
import { FacturacionComponent } from './facturacion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FacturacionComponent],
  imports: [CommonModule, FacturacionRoutingModule,  FormsModule,],
})
export class FacturacionModule {}
