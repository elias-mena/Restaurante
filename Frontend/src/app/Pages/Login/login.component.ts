import { Component } from '@angular/core';
import { UsuariosService } from 'src/Services/Seguridad/usuarios.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private usuariosService: UsuariosService,
    private messageService: MessageService,
    private router: Router
  ) {}

  valCheck: string[] = ['remember'];

  username!: string;
  password!: string;

  onClickLogin() {
    if (this.username) {
      const data = {
        username: this.username,
        password: this.password,
      };

      this.usuariosService.userLogin(data).then((users) => {
        console.log(users);
        debugger;
        // if (user.contrasenia == this.password) {
        //   document.cookie = 'esAdministrador=' + user.esAdministrador;
        //   document.cookie = 'esSeguridad=' + user.esSeguridad;
        //   document.cookie = 'esAdminRestaurante=' + user.esAdminRestaurante;
        //   document.cookie = 'esAdminCuentas=' + user.esAdminCuentas;
        //   this.router.navigate(['/']);
        // } else {
        //   this.messageService.add({
        //     severity: 'success',
        //     summary: 'Successful',
        //     detail: 'Credenciales Incorrectas',
        //     life: 3000,
        //   });
        // }
      });
    }
  }
}
