import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { IBuffet } from 'src/Interfaces/buffet';
import { BuffetService } from 'src/Services/Administracion/buffet.service';
import { IMeasureUnit } from 'src/Interfaces/measure_unit';
import { MeasureUnitService } from 'src/Services/Seguridad/measureUnit.service';

@Component({
  selector: 'app-buffet',
  templateUrl: './buffet.component.html',
})
export class BuffetComponent {
  buffet: IBuffet[];
  bufet: IBuffet;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  buffetsTypes:  {
    idTipo: number,
    descripcion: string
  } []
  unidadesMedida: IMeasureUnit;

  @ViewChild('dt') table: Table;

  constructor(
    private especialesService: BuffetService,
    private unidadesMedidaService: MeasureUnitService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.buffetsTypes = [
      {
        idTipo: 1,
        descripcion: "Marina"
      },
      {
        idTipo: 2,
        descripcion: "Vegetal"
      },
      {
        idTipo: 3,
        descripcion: "Frutas"
      },
      {
        idTipo: 4,
        descripcion: "Mediterranea"
      }
    ]
  }

  openNew() {
    this.bufet = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(bufet: IBuffet) {
    this.bufet = { ...bufet };
    this.dialog = true;
  }

  deleteProduct(bufet: IBuffet) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + bufet.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.especialesService.delete(bufet._id).then(() => {
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

  onClickUpload(e: any) {
    console.log(e)
  }

  saveProduct() {
    if (this.bufet._id != null) {
      this.especialesService.modify(this.bufet._id, this.bufet).then(() => {
        this.submitted = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Actualizado',
          life: 3000,
        });

        this.dialog = false;
        this.bufet = {};
      });
    } else {
      this.especialesService.add(this.bufet).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.bufet = {};
      });
    }
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.especialesService.getData().then((buffet) => {
      this.buffet = buffet;
      this.loading = false;
    });

    this.unidadesMedidaService.getData().then((unidadesMedida) => {
      this.unidadesMedida = unidadesMedida;
      this.loading = false;
    });
  }
}
