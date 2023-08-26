import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { IBuffet } from 'src/Interfaces/buffet';
import { BuffetService } from 'src/Services/Administracion/buffet.service';

interface Restaurante {
  nombreRest: string;
  idRest: string;
}

@Component({
  selector: 'app-buffet',
  templateUrl: './buffet.component.html',
})
export class BuffetComponent {
  buffet: IBuffet[];
  bufet: IBuffet;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  restaurantes: Restaurante[];

  @ViewChild('dt') table: Table;

  constructor(
    private especialesService: BuffetService,
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
    this.bufet = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(bufet: IBuffet) {
    this.bufet = { ...bufet };
    this.dialog = true;
  }

  deleteProduct(bufet: IBuffet) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + bufet.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.especialesService.delete(bufet._id).then(() => {
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
    console.log(this.bufet);
    if (this.bufet._id != null) {
      this.especialesService.modify(this.bufet._id, this.bufet).then(() => {
        this.submitted = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Actualizado',
          life: 3000,
        });

        this.dialog = false;
        this.bufet = {};
      });
    } else {
      this.especialesService.add(this.bufet).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.bufet = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.especialesService.getData().then((buffet) => {
      this.buffet = buffet;
      this.loading = false;
    });
  }
}
