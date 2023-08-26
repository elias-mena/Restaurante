import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services & Modules
import { EspecialesRoutingModule } from './especiales-routing.module';
import { BuffetComponent } from './buffet.component';
import { BebidasComponent } from './bebidas.component';
import { EspecialidadesComponent } from './especialidades.component';
import { GaseosasComponent } from './gaseosas.component';
import { LicoresComponent } from './licores.component';
import { VinosComponent } from './vinos.component';
import { SpecialityService } from 'src/Services/Administracion/speciality.service';

// PrimeNG
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BuffetComponent,
    BebidasComponent,
    EspecialidadesComponent,
    GaseosasComponent,
    LicoresComponent,
    VinosComponent,
    // FormsModule,
  ],
  imports: [
    CommonModule,
    EspecialesRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    RadioButtonModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [SpecialityService, ConfirmationService, MessageService],
})
export class EspecialesModule {}
