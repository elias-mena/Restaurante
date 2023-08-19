import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientesComponent],
  imports: [CommonModule, ClientesRoutingModule,  FormsModule,],
})
export class ClientesModule {}

