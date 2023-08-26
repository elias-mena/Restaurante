import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { BrandService } from 'src/Services/Proveedores/brand.service';
import { IBrand } from 'src/Interfaces/brand';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
})
export class MarcasComponent {
  marcas: IBrand[];
  marca: IBrand;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;

  @ViewChild('dt') table: Table;

  constructor(
    private marcasService: BrandService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.marca = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(marca: IBrand) {
    this.marca = { ...marca };
    this.dialog = true;
  }

  deleteProduct(marca: IBrand) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + marca.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.marcasService.deleteItem(marca._id).then(() => {
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
    console.log(this.marca);
    if (this.marca._id != null) {
      this.marcasService.modify(this.marca._id, this.marca).then(() => {
        this.submitted = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Actualizado',
          life: 3000,
        });

        this.dialog = false;
        this.marca = {};
      });
    } else {
      this.marcasService.add(this.marca).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.marca = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.marcasService.getData().then((marcas) => {
      this.marcas = marcas;
      this.loading = false;
    });
  }
}
