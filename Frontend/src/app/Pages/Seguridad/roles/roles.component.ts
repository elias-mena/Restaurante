import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { IRole } from 'src/Interfaces/role';
import { RoleService } from 'src/Services/Seguridad/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent {
  roles: IRole[];
  rol: IRole;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;

  @ViewChild('dt') table: Table;

  constructor(
    private rolesService: RoleService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.rol = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(rol: IRole) {
    this.rol = { ...rol };
    this.dialog = true;
  }

  deleteProduct(rol: IRole) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + rol.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.rolesService.deleteItem(rol._id).then(() => {
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
    console.log(this.rol);
    if (this.rol._id != null) {
      this.rolesService.modify(this.rol._id, this.rol).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Actualizado',
          life: 3000,
        });

        this.dialog = false;
        this.rol = {};
      });
    } else {
      this.rolesService.add(this.rol).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Agregado',
          life: 3000,
        });

        this.dialog = false;
        this.rol = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.rolesService.getData().then((roles) => {
      this.roles = roles;
      this.loading = false;
    });
  }
}

