import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Licores } from 'src/Interfaces/Administracion';
import { EspecialesService } from 'src/Services/Administracion/especiales.service';

interface Restaurante {
  nombreRest: string;
  idRest: string;
}

@Component({
  selector: 'app-licores',
  templateUrl: './licores.component.html',
  styleUrls: ['./licores.component.css'],
})
export class LicoresComponent {
  licores: Licores[];
  licor: Licores;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  restaurantes: Restaurante[];

  @ViewChild('dt') table: Table;

  constructor(
    private especialesService: EspecialesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
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
    this.licor = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(licor: Licores) {
    this.licor = { ...licor };
    this.dialog = true;
  }

  deleteProduct(licor: Licores) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + licor.descripcion + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.especialesService.deleteItemLicores(licor._id).then(() => {
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
    console.log(this.licor);
    if (this.licor._id != null) {
      this.especialesService.modifyLicores(this.licor._id, this.licor).then(() => {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Actualizado',
      life: 3000,
    });

    this.dialog = false;
    this.licor = {};
  });
} else {
  this.especialesService.addLicores(this.licor).then(() => {
    this.submitted = true;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Creado',
      life: 3000,
    });

    this.dialog = false;
    this.licor = {};
  });
}

this.getAllData();
}


ngOnInit() {
this.getAllData();
}

getAllData() {
this.especialesService.getDataLicores().then((licores) => {
  this.licores = licores;
  this.loading = false;
});
}
}