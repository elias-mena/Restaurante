import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Proveedores } from 'src/Interfaces/Proveedores';
import { ProveedoresService } from 'src/Services/Proveedores/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  proveedores: Proveedores[];
  proveedor: Proveedores;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;

  @ViewChild('dt') table: Table;

  constructor(
    private proveedoresService: ProveedoresService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.proveedor = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(proveedor: Proveedores) {
    this.proveedor = { ...proveedor };
    this.dialog = true;
  }

  deleteProduct(proveedor: Proveedores) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + proveedor.nombre + '?',
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
