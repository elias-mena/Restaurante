import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { ISupplier } from 'src/Interfaces/supplier';
import { SupplierService } from 'src/Services/Proveedores/supplier.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
})
export class ProveedoresComponent {
  proveedores: ISupplier[];
  proveedor: ISupplier;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;

  @ViewChild('dt') table: Table;

  constructor(
    private proveedoresService: SupplierService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.proveedor = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(proveedor: ISupplier) {
    this.proveedor = { ...proveedor };
    this.dialog = true;
  }

  deleteProduct(proveedor: ISupplier) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + proveedor.name + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.proveedoresService.deleteItem(proveedor._id).then(() => {
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
    console.log(this.proveedor);
    if (this.proveedor._id != null) {
      this.proveedoresService
        .modify(this.proveedor._id, this.proveedor)
        .then(() => {
          this.submitted = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Registro Actualizado',
            life: 3000,
          });

          this.dialog = false;
          this.proveedor = {};
        });
    } else {
      this.proveedoresService.add(this.proveedor).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.proveedor = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.proveedoresService.getData().then((proveedores) => {
      this.proveedores = proveedores;
      this.loading = false;
    });
  }
}
