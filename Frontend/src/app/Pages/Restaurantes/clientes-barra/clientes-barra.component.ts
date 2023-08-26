import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CustomersService } from 'src/Services/Restaurantes/customers.service';
import { ICustomer } from 'src/Interfaces/Customer';
@Component({
  selector: 'app-clientes-barra',
  templateUrl: './clientes-barra.component.html',
  styleUrls: ['./clientes-barra.component.css'],
})
export class ClientesBarraComponent {
  clientes: ICustomer[];
  cliente: ICustomer;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;

  @ViewChild('dt') table: Table;

  constructor(
    private clientesService: CustomersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.cliente = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(cliente: ICustomer) {
    this.cliente = { ...cliente };
    this.dialog = true;
  }

  deleteProduct(cliente: ICustomer) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + cliente.full_name + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clientesService.deleteItem(cliente._id).then(() => {
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
    if (this.cliente._id != null) {
      this.clientesService.modify(this.cliente._id, this.cliente).then(() => {
        this.submitted = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Actualizado',
          life: 3000,
        });

        this.dialog = false;
        this.cliente = {};
      });
    } else {
      this.clientesService.add(this.cliente).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.cliente = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.clientesService.getData().then((cliente) => {
      this.cliente = cliente;
      this.loading = false;
    });
  }
}
