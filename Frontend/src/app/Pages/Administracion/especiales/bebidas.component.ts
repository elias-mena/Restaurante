import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { IGasDrink } from 'src/Interfaces/gas_drink';
import { DrinkService } from 'src/Services/Administracion/drink.service';
import { IRestaurant } from 'src/Interfaces/restaurant';
@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css'],
})
export class BebidasComponent {
  bebidas: IGasDrink[];
  bebida: IGasDrink;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  restaurantes: Restaurante[];

  @ViewChild('dt') table: Table;

  constructor(
    private especialesService: EspecialesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
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
    this.bebida = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(bebida: Bebidas) {
    this.bebida = { ...bebida };
    this.dialog = true;
  }

  deleteProduct(bebida: Bebidas) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + bebida.descripcion + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.especialesService.deleteItemBebida(bebida._id).then(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Registro Eliminado',
            life: 3000,
          });
          this.getAllData();
        });
      },
    });
  }

  hideDialog() {
    this.dialog = false;
    this.submitted = false;
  }

  saveProduct() {
    if (this.bebida._id != null) {
      this.especialesService
        .modifyBebida(this.bebida._id, this.bebida)
        .then(() => {
          this.submitted = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Registro Actualizado',
            life: 3000,
          });

          this.dialog = false;
          this.bebida = {};
           this.getAllData();

        });
    } else {
      this.especialesService.addBebida(this.bebida).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.bebida = {};

        this.getAllData();
      });
    }

  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.especialesService.getDataBebida().then((bebidas) => {
      this.bebidas = bebidas;
      this.loading = false;
    });
  }
}
