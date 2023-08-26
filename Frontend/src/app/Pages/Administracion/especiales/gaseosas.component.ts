import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { IGasDrink } from 'src/Interfaces/gas_drink';
import { GasDrinkService } from 'src/Services/Administracion/gasDrink.Service';
import { IBrand } from 'src/Interfaces/brand';
import { ICountry } from 'src/Interfaces/country';
import { BrandService } from 'src/Services/Proveedores/brand.service';
import { CountryService } from 'src/Services/Seguridad/country.service';

interface Restaurante {
  nombreRest: string;
  idRest: string;
}

@Component({
  selector: 'app-gaseosas',
  templateUrl: './gaseosas.component.html',
})
export class GaseosasComponent {
  gaseosas: IGasDrink[];
  gaseosa: IGasDrink;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  marcas: IBrand;
  nacionalidades: ICountry;

  @ViewChild('dt') table: Table;

  constructor(
    private especialesService: GasDrinkService,
    private brandService: BrandService,
    private countryService: CountryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  openNew() {
    this.gaseosa = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(gaseosa: IGasDrink) {
    this.gaseosa = { ...gaseosa };
    this.dialog = true;
  }

  deleteProduct(gaseosa: IGasDrink) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + gaseosa.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.especialesService.delete(gaseosa._id).then(() => {
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
      this.especialesService.modify(this.gaseosa._id, this.gaseosa).then(() => {
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
      this.especialesService.add(this.gaseosa).then(() => {
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
    this.especialesService.getData().then((gaseosas) => {
      this.gaseosas = gaseosas;
      this.loading = false;
    });

    this.brandService.getData().then((marcas) => {
      this.marcas = marcas;
      this.loading = false;
    });

    this.countryService.getData().then((nacionalidad) => {
      this.nacionalidades = nacionalidad;
      this.loading = false;
    });
  }
}

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: GaseosasComponent }]),
  ],
  exports: [RouterModule],
})
export class EspecialesRoutingModule {}
