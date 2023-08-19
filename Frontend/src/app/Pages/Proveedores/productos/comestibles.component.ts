import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Comestibles } from 'src/Interfaces/Proveedores';
import { ProductosService } from 'src/Services/Proveedores/productos.service';

@Component({
  selector: 'app-comestibles',
  templateUrl: './comestibles.component.html',
  styleUrls: ['./comestibles.component.css'],
})
export class ComestiblesComponent {
  comestibles: Comestibles[];
  comestible: Comestibles;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;

  @ViewChild('dt') table: Table;

  constructor(
    private productosService: ProductosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.comestible = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(comestible: Comestibles) {
    this.comestible = { ...comestible };
    this.dialog = true;
  }

  deleteProduct(comestible: Comestibles) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + comestible.nombre + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productosService.deleteItem(comestible._id).then(() => {
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
    console.log(this.comestible);
    if (this.comestible._id != null) {
      this.productosService.modify(this.comestible._id, this.comestible).then(() => {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Actualizado',
      life: 3000,
    });

    this.dialog = false;
    this.comestible = {};
  });
} else {
  this.productosService.add(this.comestible).then(() => {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Creado',
      life: 3000,
    });

    this.dialog = false;
    this.comestible = {};
  });
}

this.getAllData();
}



  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.productosService.getData().then((comestibles) => {
      this.comestibles = comestibles;
      this.loading = false;
    });
  }
}
