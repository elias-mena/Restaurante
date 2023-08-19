import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { ConsecutivosService } from 'src/Services/Seguridad/consecutivos.service';
import { ConsecutivosRoutingModule } from './consecutivos-routing.module';
import { ConsecutivosComponent } from './consecutivos.component';

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
  declarations: [ConsecutivosComponent],
  imports: [
    CommonModule,
    ConsecutivosRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    ToastModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [ConsecutivosService, ConfirmationService, MessageService],
})
export class ConsecutivosModule {}
