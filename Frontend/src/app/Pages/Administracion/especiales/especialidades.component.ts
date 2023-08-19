import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Especialidades } from 'src/Interfaces/Administracion';
import { EspecialesService } from 'src/Services/Administracion/especiales.service';

interface Restaurante {
  nombreRest: string;
  idRest: string;
}

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css'],
})
export class EspecialidadesComponent {
  especialidades: Especialidades[];
  especialidad: Especialidades;
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
    this.especialidad = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(especialidad: Especialidades) {
    this.especialidad = { ...especialidad };
    this.dialog = true;
  }

  deleteProduct(especialidad: Especialidades) {
    this.confirmationService.confirm({
      message:
        'Está seguro de querer eliminar' + especialidad.nombrePlatillo + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.especialesService.deleteItemEspecialidades(especialidad._id).then(() => {
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
    console.log(this.especialidad);
    if (this.especialidad._id != null) {
      this.especialesService.modifyEspecialidades(this.especialidad._id, this.especialidad).then(() => {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Actualizado',
      life: 3000,
    });

    this.dialog = false;
    this.especialidad = {};
  });
} else {
  this.especialesService.addEspecialidades(this.especialidad).then(() => {
    this.submitted = true;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Creado',
      life: 3000,
    });

    this.dialog = false;
    this.especialidad = {};
  });
}

this.getAllData();
}


ngOnInit() {
this.getAllData();
}

getAllData() {
this.especialesService.getDataEspecialidades().then((especialidades) => {
  this.especialidades = especialidades;
  this.loading = false;
});
}
}

