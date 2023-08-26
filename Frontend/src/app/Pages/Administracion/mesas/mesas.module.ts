import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { MesasRoutingModule } from './mesas-routing.module';
import { MesasComponent } from './mesas.component';
import { TableService } from 'primeng/table';

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
  declarations: [MesasComponent],
  imports: [
    CommonModule,
    MesasRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    ToastModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [TableService, ConfirmationService, MessageService],
})
export class MesasModule {}
