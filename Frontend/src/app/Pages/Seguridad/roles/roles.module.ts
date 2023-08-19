import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { RolesService } from 'src/Services/Seguridad/roles.service';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    ToastModule,
    FormsModule,
  ],
  providers: [RolesService, ConfirmationService, MessageService],
})
export class RolesModule {}
