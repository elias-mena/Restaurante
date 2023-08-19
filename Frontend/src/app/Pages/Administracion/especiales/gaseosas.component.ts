import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { Gaseosas } from 'src/Interfaces/Administracion';
import { EspecialesService } from 'src/Services/Administracion/especiales.service';

interface Restaurante {
  nombreRest: string;
  idRest: string;
}

@Component({
  selector: 'app-gaseosas',
  templateUrl: './gaseosas.component.html',
  styleUrls: ['./gaseosas.component.css'],
})

export class GaseosasComponent {
  gaseosas: Gaseosas[];
  gaseosa: Gaseosas;
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
    this.gaseosa = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(gaseosa: Gaseosas) {
    this.gaseosa = { ...gaseosa };
    this.dialog = true;
  }

  deleteProduct(gaseosa: Gaseosas) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + gaseosa.descripcion + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.especialesService.deleteItemGaseosa(gaseosa._id).then(() => {
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
    console.log(this.gaseosa);
    if (this.gaseosa._id != null) {
      this.especialesService.modifyGaseosa(this.gaseosa._id, this.gaseosa).then(() => {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Actualizado',
      life: 3000,
    });

    this.dialog = false;
    this.gaseosa = {};
  });
} else {
  this.especialesService.addGaseosa(this.gaseosa).then(() => {
    this.submitted = true;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Registro Creado',
      life: 3000,
    });

    this.dialog = false;
    this.gaseosa = {};
  });
}

this.getAllData();
}


ngOnInit() {
this.getAllData();
}

getAllData() {
this.especialesService.getDataGaseosa().then((gaseosas) => {
  this.gaseosas = gaseosas;
  this.loading = false;
});
}
}



@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: GaseosasComponent }])],
  exports: [RouterModule],
})
export class EspecialesRoutingModule {}