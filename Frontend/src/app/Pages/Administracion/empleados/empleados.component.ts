import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { IEmployee } from 'src/Interfaces/employee';
import { IRole } from 'src/Interfaces/role';
import { IRestaurant } from 'src/Interfaces/restaurant';
import { ICountry } from 'src/Interfaces/country';
import { EmployeeService } from 'src/Services/Administracion/employee.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
})
export class EmpleadosComponent {
  empleados: IEmployee[];
  empleado: IEmployee;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  puestos: IRole[];
  nacionalidades: ICountry[];
  restaurantes: IRestaurant[];

  @ViewChild('dt') table: Table;

  constructor(
    private empleadosService: EmployeeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.empleado = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(empleado: IEmployee) {
    this.empleado = { ...empleado };
    this.dialog = true;
  }

  deleteProduct(empleado: IEmployee) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + empleado.name + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.empleadosService.deleteItem(empleado.identification).then(() => {
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
    if (this.empleado.identification != null) {
      this.empleadosService
        .modify(this.empleado.identification, this.empleado)
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
