import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { CajasRoutingModule } from './cajas-routing.module';
import { CajasComponent } from './cajas.component';
import { CajasService } from 'src/Services/Seguridad/cajas.service';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CajasComponent],
  imports: [
    CommonModule,
    CajasRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [CajasService, ConfirmationService, MessageService],
})
export class CajasModule {}
