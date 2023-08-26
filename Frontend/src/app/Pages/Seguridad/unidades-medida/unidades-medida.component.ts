import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { IMeasureUnit } from 'src/Interfaces/measure_unit';
import { MeasureUnitService } from 'src/Services/Seguridad/measureUnit.service';

@Component({
  selector: 'app-unidades-medida',
  templateUrl: './unidades-medida.component.html',
})
export class UnidadesMedidaComponent {
  unidadesMedida: IMeasureUnit[];
  unidadMedida: IMeasureUnit;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  detalles: any[];
  escalas: any[];

  @ViewChild('dt') table: Table;

  constructor(
    private unidadesMedidaService: MeasureUnitService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.unidadMedida = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(unidadMedida: IMeasureUnit) {
    this.unidadMedida = { ...unidadMedida };
    this.dialog = true;
  }

  deleteProduct(unidadMedida: IMeasureUnit) {
    this.confirmationService.confirm({
      message:
        'Está seguro de querer eliminar' + unidadMedida.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.unidadesMedidaService.deleteItem(unidadMedida._id).then(() => {
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
    console.log(this.unidadMedida);
    if (this.unidadMedida._id != null) {
      this.unidadesMedidaService
        .modify(this.unidadMedida._id, this.unidadMedida)
        .then(() => {
          this.submitted = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Registro Actualizado',
            life: 3000,
          });

          this.dialog = false;
          this.unidadMedida = {};
        });
    } else {
      this.unidadesMedidaService.add(this.unidadMedida).then(() => {
        this.submitted = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Creado',
          life: 3000,
        });

        this.dialog = false;
        this.unidadMedida = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.unidadesMedidaService.getData().then((unidadesMedida) => {
      this.unidadesMedida = unidadesMedida;
      this.loading = false;

      this.detalles = [
        { label: 'Unidades de Capacidad', value: 'CLI' },
        { label: 'Unidades de Densidad', value: 'PE' },
        { label: 'Unidades de Energía', value: 'PRO' },
        { label: 'Unidades de Fuerza', value: 'PU' },
        { label: 'Unidades de Longitud', value: 'PE' },
        { label: 'Unidades de Masa', value: 'PRO' },
        { label: 'Unidades de Peso Específico', value: 'PU' },
        { label: 'Unidades de Potencia', value: 'PE' },
        { label: 'Unidades de Superficie', value: 'PRO' },
        { label: 'Unidades de Temperatura', value: 'PU' },
        { label: 'Unidades de Tiempo', value: 'PE' },
        { label: 'Unidades de Velocidad', value: 'PRO' },
        { label: 'Unidades de Viscosidad', value: 'PU' },
        { label: 'Unidades de Volumen', value: 'PU' },
        { label: 'Unidades de Eléctricas', value: 'PU' },
      ];

      this.escalas = [
        { label: 'Yotta', value: 'Y' },
        { label: 'Zetta', value: 'Z' },
        { label: 'Exa', value: 'E' },
        { label: 'Peta', value: 'P' },
        { label: 'Tera', value: 'T' },
        { label: 'Giga', value: 'G' },
        { label: 'Meega', value: 'M' },
        { label: 'Kilo', value: 'k' },
        { label: 'Hecto', value: 'h' },
        { label: 'Deca', value: 'da' },
        { label: 'Deci', value: 'd' },
        { label: 'Centi', value: 'c' },
        { label: 'Mili', value: 'm' },
        { label: 'Micro', value: 'μ' },
        { label: 'Nano', value: 'n' },
        { label: 'Pico', value: 'p' },
        { label: 'Femto', value: 'f' },
        { label: 'Atto', value: 'a' },
        { label: 'Zepto', value: 'z' },
        { label: 'Yocto', value: 'y' },
      ];
    });
  }
}
