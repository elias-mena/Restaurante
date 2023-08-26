import { Component } from '@angular/core';
import { UserService } from 'src/Services/Seguridad/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(
    private usuariosService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  valCheck: string[] = ['remember'];

  nombre!: string;
  primerApellido!: string;
  segundoApellido!: string;
  correo!: string;
  contrasenia!: string;
  confirmarContrasenia!: string;

  onClickLogin() {
    // if (this.nombre) {
    //   this.usuariosService.getDataByUsername(this.nombre).then((users) => {
    //     var user = users[0];
    //     if (user.contrasenia == this.primerApellido) {
    //       document.cookie = 'esAdministrador=' + user.esAdministrador;
    //       document.cookie = 'esSeguridad=' + user.esSeguridad;
    //       document.cookie = 'esAdminRestaurante=' + user.esAdminRestaurante;
    //       document.cookie = 'esAdminCuentas=' + user.esAdminCuentas;
    //       this.router.navigate(['/']);
    //     } else {
    //       this.messageService.add({
    //         severity: 'success',
    //         summary: 'Successful',
    //         detail: 'Credenciales Incorrectas',
    //         life: 3000,
    //       });
    //     }
    //   });
    // }
  }
}
