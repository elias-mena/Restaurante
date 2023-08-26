import { Component, ViewChild } from '@angular/core';

// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

//Services & Interfaces
import { IConsecutive } from 'src/Interfaces/consecutive';
import { ConsecutiveService } from 'src/Services/Seguridad/consecutive.service';

@Component({
  selector: 'app-consecutivos',
  templateUrl: './consecutivos.component.html',
})
export class ConsecutivosComponent {
  consecutivos: IConsecutive[];
  consecutivo: IConsecutive;
  loading: boolean = true;
  dialog: boolean;
  submitted: boolean;
  types: any[];

  @ViewChild('dt') table: Table;

  constructor(
    private consecutivosService: ConsecutiveService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  openNew() {
    this.consecutivo = {};
    this.submitted = false;
    this.dialog = true;
  }

  editProduct(consecutivo: IConsecutive) {
    this.consecutivo = { ...consecutivo };
    this.dialog = true;
  }

  deleteProduct(consecutivo: IConsecutive) {
    this.confirmationService.confirm({
      message: 'Está seguro de querer eliminar' + consecutivo.description + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.consecutivosService.deleteItem(consecutivo._id).then(() => {
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
    console.log(this.consecutivo);
    if (this.consecutivo._id != null) {
      this.consecutivosService
        .modify(this.consecutivo._id, this.consecutivo)
        .then(() => {
          this.submitted = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Registro Actualizado',
            life: 3000,
          });
          this.dialog = false;
          this.consecutivo = {};
        });
    } else {
      this.consecutivosService.add(this.consecutivo).then(() => {
        this.submitted = true;

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Registro Agregado',
          life: 3000,
        });

        this.dialog = false;
        this.consecutivo = {};
      });
    }

    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.consecutivosService.getData().then((consecutivos) => {
      this.consecutivos = consecutivos;
      this.loading = false;

      this.types = [
        { label: 'Clientes', value: 'CLI' },
        { label: 'Personal', value: 'PE' },
        { label: 'Proveedores', value: 'PRO' },
        { label: 'Puestos', value: 'PU' },
        { label: 'Eventos o Roles', value: 'EVE' },
        { label: 'Usuarios', value: 'USU' },
        { label: 'Unidades de Medidad', value: 'UM' },
        { label: 'Países', value: 'P' },
        { label: 'Marcas', value: 'M' },
        { label: 'Comestibles', value: 'COM' },
        { label: 'Desechables y Empaques', value: 'DE' },
        { label: 'Equipos y Utensilios', value: 'EU' },
        { label: 'Limpieza e Higiene', value: 'LH' },
        { label: 'Tecnología', value: 'TEC' },
        { label: 'Restaurantes', value: 'RES' },
        { label: 'Buffet', value: 'BUF' },
        { label: 'Especiales', value: 'ESP' },
        { label: 'Bebidas Calientes', value: 'BC' },
        { label: 'Bebidas Heladas', value: 'BH' },
        { label: 'Bebidas Gaseosas', value: 'BG' },
        { label: 'Licores', value: 'L' },
        { label: 'Vinos', value: 'V' },
        { label: 'Empleados', value: 'EMP' },
        { label: 'Mesas', value: 'ME' },
        { label: 'Bitácora', value: 'BIT' },
        { label: 'Facturas', value: 'FAC' },
      ];
    });
  }
}
