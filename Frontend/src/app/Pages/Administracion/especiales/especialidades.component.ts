import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { SpecialityService } from 'src/Services/Administracion/speciality.service';
import { ISpeciality } from 'src/Interfaces/speciality';

interface Restaurante {
  nombreRest: string;
  idRest: string;
}

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
})
export class EspecialidadesComponent {
  especialidades: ISpeciality[];
  especialidad: ISpeciality;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  restaurantes: Restaurante[];

  @ViewChild('dt') table: Table;

  constructor(
    private especialesService: SpecialityService,
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

  editProduct(especialidad: ISpeciality) {
    this.especialidad = { ...especialidad };
    this.dialog = true;
  }

  deleteProduct(especialidad: ISpeciality) {
    this.confirmationService.confirm({
      message:
        'Está seguro de querer eliminar' + especialidad.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.especialesService.delete(especialidad._id).then(() => {
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
      this.especialesService
        .modify(this.especialidad._id, this.especialidad)
        .then(() => {
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
      this.especialesService.add(this.especialidad).then(() => {
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
    this.especialesService.getData().then((especialidades) => {
      this.especialidades = especialidades;
      this.loading = false;
    });
  }
}
