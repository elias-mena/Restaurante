import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { EmpleadosService } from 'src/Services/Administracion/empleados.service';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados.component';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmpleadosComponent],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    CommonModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    ToastModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [EmpleadosService, ConfirmationService, MessageService],
})
export class EmpleadosModule {}
