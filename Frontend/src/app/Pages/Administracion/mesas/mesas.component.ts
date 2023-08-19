import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Mesas, Restaurante } from 'src/Interfaces/Administracion';
import { MesasService } from 'src/Services/Administracion/mesas.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css'],
})
export class MesasComponent {
  mesas: Mesas[];
  mesa: Mesas;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  restaurantes: Restaurante[];

  @ViewChild('dt') table: Table;

  constructor(
    private mesasService: MesasService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.mesa = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(mesa: Mesas) {
    this.mesa = { ...mesa };
    this.dialog = true;
  }

  deleteProduct(mesa: Mesas) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar ' + mesa.nombre + '?',
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