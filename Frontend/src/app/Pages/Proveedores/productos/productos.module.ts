import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ComestiblesComponent } from './comestibles.component';
import { LimpiezaComponent } from './limpieza.component';
import { InventoryService } from 'src/Services/Proveedores/inventory.service';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductosComponent, ComestiblesComponent, LimpiezaComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [InventoryService, ConfirmationService, MessageService],
})
export class ProductosModule {}
