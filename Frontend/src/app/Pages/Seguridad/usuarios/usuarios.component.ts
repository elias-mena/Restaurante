import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { IUser } from 'src/Interfaces/user';
import { UserService } from 'src/Services/Seguridad/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  usuarios: IUser[];
  usuario: IUser;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  cambioContrasenia: boolean = false;

  @ViewChild('dt') table: Table;

  constructor(
    private usuariosService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.usuario = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(usuario: IUser) {
    this.usuario = { ...usuario };
    this.dialog = true;
  }

  deleteProduct(usuario: IUser) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar a' + usuario.name + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usuariosService.deleteItem(usuario._id).then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Eliminado',
          life: 3000,
        });
      });
      this.getAllData();
    },
  });
}



  hideDialog() {
    this.dialog = false;
    this.submitted = false;
  }

  saveProduct() {
    console.log(this.usuario);
    if (this.usuario._id != null) {
      this.usuariosService.modify(this.usuario._id, this.usuario).then(() => {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Actualizado',
      life: 3000,
    });

    this.dialog = false;
    this.usuario = {};
  });
} else {
  this.usuariosService.add(this.usuario).then(() => {
    this.submitted = true;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Creado',
      life: 3000,
    });

    this.dialog = false;
    this.usuario = {};
  });
}

this.getAllData();
}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.usuariosService.getData().then((roles) => {
      this.usuarios = roles;
      this.loading = false;
    });
  }
}