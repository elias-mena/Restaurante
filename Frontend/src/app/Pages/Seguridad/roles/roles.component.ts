import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Roles } from 'src/Interfaces/Seguridad';
import { RolesService } from 'src/Services/Seguridad/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent {
  roles: Roles[];
  rol: Roles;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;

  @ViewChild('dt') table: Table;

  constructor(
    private rolesService: RolesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.rol = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(rol: Roles) {
    this.rol = { ...rol };
    this.dialog = true;
  }

  deleteProduct(rol: Roles) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + rol.descripcion + '?',
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

