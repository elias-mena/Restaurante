import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Paises } from 'src/Interfaces/Seguridad';
import { PaisesService } from 'src/Services/Seguridad/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
})
export class PaisesComponent {
  paises: Paises[];
  pais: Paises;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;

  @ViewChild('dt') table: Table;

  constructor(
    private paisesService: PaisesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.pais = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(pais: Paises) {
    this.pais = { ...pais };
    this.dialog = true;
  }

  deleteProduct(pais: Paises) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + pais.pais + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.paisesService.deleteItem(pais._id).then(() => {
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
    if (this.pais._id != null) {
      this.paisesService.modify(this.pais._id, this.pais).then(() => {
        this.submitted = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Actualizado',
          life: 3000,
        });

        this.dialog = false;
        this.pais = {};
      });
    } else {
      this.paisesService.add(this.pais).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.pais = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.paisesService.getData().then((paises) => {
      this.paises = paises;
      this.loading = false;
    });
  }
}