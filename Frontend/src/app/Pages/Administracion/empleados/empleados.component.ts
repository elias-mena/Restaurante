import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Empleados, Puestos, Restaurante } from 'src/Interfaces/Administracion';
import { EmpleadosService } from 'src/Services/Administracion/empleados.service';
import { Paises } from 'src/Interfaces/Seguridad';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
})
export class EmpleadosComponent {
  empleados: Empleados[];
  empleado: Empleados;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  puestos: Puestos[];
  nacionalidades: Paises[];
  restaurantes: Restaurante[];

  @ViewChild('dt') table: Table;

  constructor(
    private empleadosService: EmpleadosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.empleado = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(empleado: Empleados) {
    this.empleado = { ...empleado };
    this.dialog = true;
  }

  deleteProduct(empleado: Empleados) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + empleado.nombre + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.empleadosService.deleteItem(empleado._id).then(() => {
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
    console.log(this.empleado);
    if (this.empleado._id != null) {
      this.empleadosService
        .modify(this.empleado._id, this.empleado)
        .then(() => {
          this.submitted = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Registro Actualizado',
            life: 3000,
          });

          this.dialog = false;
          this.empleado = {};
        });
    } else {
      this.empleadosService.add(this.empleado).then(() => {
        this.submitted = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.empleado = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.empleadosService.getData().then((empleados) => {
      this.empleados = empleados;
      this.loading = false;
    });
  }
}
