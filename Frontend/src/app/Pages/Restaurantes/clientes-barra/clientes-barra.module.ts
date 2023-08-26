import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesBarraRoutingModule } from './clientes-barra-routing.module';
import { ClientesBarraComponent } from './clientes-barra.component';
import { CustomersService } from 'src/Services/Restaurantes/customers.service';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientesBarraComponent],
  imports: [
    CommonModule,
    ClientesBarraRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    ToastModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [CustomersService, ConfirmationService, MessageService],
})
export class ClientesBarraModule {}
