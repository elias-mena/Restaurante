import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Productos } from 'src/Interfaces/Proveedores';
import { ProductosService } from 'src/Services/Proveedores/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  productos: Productos[];
  producto: Productos;
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
    this.producto = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(producto: Productos) {
    this.producto = { ...producto };
    this.dialog = true;
  }

  deleteProduct(producto: Productos) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + producto.descripcion + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productosService.deleteItem(producto._id).then(() => {
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
    console.log(this.producto);
    if (this.producto._id != null) {
      this.productosService.modify(this.producto._id, this.producto).then(() => {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Actualizado',
      life: 3000,
    });

    this.dialog = false;
    this.producto = {};
  });
} else {
  this.productosService.add(this.producto).then(() => {
    this.submitted = true;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Creado',
      life: 3000,
    });

    this.dialog = false;
    this.producto = {};
  });
}

this.getAllData();
}


  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.productosService.getData().then((productos) => {
      this.productos = productos;
      this.loading = false;
    });
  }
}