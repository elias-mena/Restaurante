import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { ICashier } from 'src/Interfaces/cashier';
import { CashierService } from 'src/Services/Restaurantes/cashier.service';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css'],
})
export class CajasComponent {
  cajas: ICashier[];
  caja: ICashier;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;

  @ViewChild('dt') table: Table;

  constructor(
    private cajasService: CashierService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.caja = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(caja: ICashier) {
    this.caja = { ...caja };
    this.dialog = true;
  }

  deleteProduct(caja: ICashier) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + caja.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cajasService.deleteItem(caja._id).then(() => {
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
    console.log(this.caja);
    if (this.caja._id != null) {
      this.cajasService.modify(this.caja._id, this.caja).then(() => {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Actualizado',
      life: 3000,
    });

    this.dialog = false;
    this.caja = {};

  });

} else {
  this.cajasService.add(this.caja).then(() => {
    this.submitted = true;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Creado',
      life: 3000,
    });

    this.dialog = false;
    this.caja = {};
  });
}

this.getAllData();
}

  ngOnInit() {
    this.getAllData();
  }
  
  getAllData() {
      this.cajasService.getData().then((cajas) => {
        this.cajas = cajas;
        this.loading = false;
      });
    }
}
