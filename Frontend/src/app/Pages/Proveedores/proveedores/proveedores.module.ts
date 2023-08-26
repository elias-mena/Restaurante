import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores.component';
import { SupplierService } from 'src/Services/Proveedores/supplier.service';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProveedoresComponent],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [SupplierService, ConfirmationService, MessageService],
})
export class ProveedoresModule {}
