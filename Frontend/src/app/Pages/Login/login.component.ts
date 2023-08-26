import { Component } from '@angular/core';
import { AuthService } from 'src/Services/Seguridad/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private usuariosService: AuthService,
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
        console.log(users)
          document.cookie = 'esAdministrador=' + users.user.sis_admin;
          document.cookie = 'esSeguridad=' + users.user.sec_admin;
          document.cookie = 'esAdminRestaurante=' + users.user.rest_admin;
          document.cookie = 'esAdminCuentas=' + users.user.accounts_admin;
          this.router.navigate(['/']);
      }).catch(e => {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Credenciales Incorrectas',
          life: 3000,
        });
      } );
    }
  }
}
