import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { TableService } from 'src/Services/Restaurantes/table.service';
import { ITable } from 'src/Interfaces/table';
import { IRestaurant } from 'src/Interfaces/restaurant';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
})
export class MesasComponent {
  mesas: ITable[];
  mesa: ITable;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  restaurantes: IRestaurant[];

  @ViewChild('dt') table: Table;

  constructor(
    private mesasService: TableService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.mesa = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(mesa: ITable) {
    this.mesa = { ...mesa };
    this.dialog = true;
  }

  deleteProduct(mesa: ITable) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar ' + mesa.name + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.mesasService.deleteItem(mesa._id).then(() => {
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
    console.log(this.mesa);
    if (this.mesa._id != null) {
      this.mesasService.modify(this.mesa._id, this.mesa).then(() => {
        this.submitted = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Actualizado',
          life: 3000,
        });

        this.dialog = false;
        this.mesa = {};
      });
    } else {
      this.mesasService.add(this.mesa).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.mesa = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.mesasService.getData().then((mesas) => {
      this.mesas = mesas;
      this.loading = false;
    });
  }
}
