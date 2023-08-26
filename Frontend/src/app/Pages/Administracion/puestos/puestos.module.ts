import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { PuestosRoutingModule } from './puestos-routing.module';
import { PuestosComponent } from './puestos.component';
import { RoleService } from 'src/Services/Seguridad/role.service';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PuestosComponent],
  imports: [
    CommonModule,
    PuestosRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    RadioButtonModule,
    FormsModule,
  ],
  providers: [RoleService, ConfirmationService, MessageService],
})
export class PuestosModule {}
