import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './paises.component';
import { CountryService } from 'src/Services/Seguridad/country.service';

// PrimeNG
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaisesComponent],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    ToastModule,
    FormsModule,
  ],
  providers: [CountryService, ConfirmationService, MessageService],
})
export class PaisesModule {}
