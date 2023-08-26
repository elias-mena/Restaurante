import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { LiquorService } from 'src/Services/Administracion/liquor.service';
import { ILiquor } from 'src/Interfaces/liquor';

interface Restaurante {
  nombreRest: string;
  idRest: string;
}

@Component({
  selector: 'app-licores',
  templateUrl: './licores.component.html',
})
export class LicoresComponent {
  licores: ILiquor[];
  licor: ILiquor;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  restaurantes: Restaurante[];

  @ViewChild('dt') table: Table;

  constructor(
    private especialesService: LiquorService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.restaurantes = [
      {
        nombreRest: 'Turin Anivo',
        idRest: '1',
      },
      {
        nombreRest: 'Notte di Fuoco',
        idRest: '2',
      },
      {
        nombreRest: 'Piccola Stella',
        idRest: '3',
      },
    ];
  }

  openNew() {
    this.licor = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(licor: ILiquor) {
    this.licor = { ...licor };
    this.dialog = true;
  }

  deleteProduct(licor: ILiquor) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + licor.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.especialesService.delete(licor._id).then(() => {
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
    console.log(this.licor);
    if (this.licor._id != null) {
      this.especialesService.modify(this.licor._id, this.licor).then(() => {
        this.submitted = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Actualizado',
          life: 3000,
        });

        this.dialog = false;
        this.licor = {};
      });
    } else {
      this.especialesService.add(this.licor).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.licor = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.especialesService.getData().then((licores) => {
      this.licores = licores;
      this.loading = false;
    });
  }
}
