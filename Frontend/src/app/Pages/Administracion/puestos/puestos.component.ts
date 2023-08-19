import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Puestos } from 'src/Interfaces/Administracion';
import { PuestosService } from 'src/Services/Administracion/puestos.service';
import { Roles } from 'src/Interfaces/Seguridad';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.css'],
})
export class PuestosComponent {
  puestos: Puestos[];
  puesto: Puestos;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  esInterno: string;

  @ViewChild('dt') table: Table;

  constructor(
    private puestosService: PuestosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.puesto = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(puesto: Puestos) {
    this.puesto = { ...puesto };
    this.dialog = true;
  }

  deleteProduct(puesto: Puestos) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + puesto.nombre + '?',
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
