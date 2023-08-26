import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { UnidadesMedidaRoutingModule } from './unidades-medida-routing.module';
import { UnidadesMedidaComponent } from './unidades-medida.component';
import { MeasureUnitService } from 'src/Services/Seguridad/measureUnit.service';

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
  declarations: [UnidadesMedidaComponent],
  imports: [
    CommonModule,
    UnidadesMedidaRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    ToastModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [MeasureUnitService, ConfirmationService, MessageService],
})
export class UnidadesMedidaModule {}
