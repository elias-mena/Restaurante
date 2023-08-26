import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { BrandService } from 'src/Services/Proveedores/brand.service';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [MarcasComponent],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    ToastModule,
    RadioButtonModule
    

  ],
  providers: [BrandService, ConfirmationService, MessageService],
})
export class MarcasModule {}
