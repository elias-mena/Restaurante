import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { UsuariosService } from 'src/Services/Seguridad/usuarios.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
  ],
  providers: [UsuariosService, MessageService],
})
export class RegistroModule {}
