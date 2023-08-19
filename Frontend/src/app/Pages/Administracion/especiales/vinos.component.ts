import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Vinos } from 'src/Interfaces/Administracion';
import { EspecialesService } from 'src/Services/Administracion/especiales.service';

interface Restaurante {
  nombreRest: string;
  idRest: string;
}

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.css'],
})
export class VinosComponent {
  vinos: Vinos[];
  vino: Vinos;
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
    this.vino = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(vino: Vinos) {
    this.vino = { ...vino };
    this.dialog = true;
  }

  deleteProduct(vino: Vinos) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + vino.descripcion + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.especialesService.deleteItemVinos(vino._id).then(() => {
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
    console.log(this.vino);
    if (this.vino._id != null) {
      this.especialesService.modifyVinos(this.vino._id, this.vino).then(() => {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Actualizado',
      life: 3000,
    });

    this.dialog = false;
    this.vino = {};
  });
} else {
  this.especialesService.addVinos(this.vino).then(() => {
    this.submitted = true;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Creado',
      life: 3000,
    });

    this.dialog = false;
    this.vino = {};
  });
}

this.getAllData();
}


ngOnInit() {
this.getAllData();
}

getAllData() {
this.especialesService.getDataVinos().then((vinos) => {
  this.vinos = vinos;
  this.loading = false;
});
}
}


