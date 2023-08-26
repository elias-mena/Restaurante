import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { CleaningService } from 'src/Services/Proveedores/cleaning.service';
import { ICleaning } from 'src/Interfaces/cleaning';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.component.html',
})
export class LimpiezaComponent {
  limpieza: ICleaning[];
  articuloLimpieza: ICleaning;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;

  @ViewChild('dt') table: Table;

  constructor(
    private productosService: CleaningService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.articuloLimpieza = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(articuloLimpieza: ICleaning) {
    this.articuloLimpieza = { ...articuloLimpieza };
    this.dialog = true;
  }

  deleteProduct(articuloLimpieza: ICleaning) {
    this.confirmationService.confirm({
      message:
        'Está seguro de querer eliminar' + articuloLimpieza.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productosService.deleteItem(articuloLimpieza._id).then(() => {
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
    console.log(this.articuloLimpieza);
    if (this.articuloLimpieza._id != null) {
      this.productosService
        .modify(this.articuloLimpieza._id, this.articuloLimpieza)
        .then(() => {
          this.submitted = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Registro Actualizado',
            life: 3000,
          });

          this.dialog = false;
          this.articuloLimpieza = {};
        });
    } else {
      this.productosService.add(this.articuloLimpieza).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.articuloLimpieza = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.productosService.getData().then((limpieza) => {
      this.limpieza = limpieza;
      this.loading = false;
    });
  }
}
