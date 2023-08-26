import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { RoleService } from 'src/Services/Seguridad/role.service';
import { IRole } from 'src/Interfaces/role';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.css'],
})
export class PuestosComponent {
  puestos: IRole[];
  puesto: IRole;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  esInterno: string;

  @ViewChild('dt') table: Table;

  constructor(
    private puestosService: RoleService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.puesto = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(puesto: IRole) {
    this.puesto = { ...puesto };
    this.dialog = true;
  }

  deleteProduct(puesto: IRole) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + puesto.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.puestosService.deleteItem(puesto._id).then(() => {
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
    console.log(this.puesto);
    if (this.puesto._id != null) {
      this.puestosService.modify(this.puesto._id, this.puesto).then(() => {
        this.submitted = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Actualizado',
          life: 3000,
        });

        this.dialog = false;
        this.puesto = {};
      });
    } else {
      this.puestosService.add(this.puesto).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.puesto = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.puestosService.getData().then((puestos) => {
      this.puestos = puestos;
      this.loading = false;
    });
  }
}
