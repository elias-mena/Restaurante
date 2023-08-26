import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// PrimeNG
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IMenu } from 'src/Interfaces/menu';
import { WineService } from 'src/Services/Administracion/wine.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;

  loading: boolean = false;
  dialog: boolean;
  submitted: boolean;
  cajaAbierta: boolean = false;
  cajaCerrada: boolean = false;
  dialogCajaAbierta: boolean = false;
  dialogCajaCerrada: boolean = false;
  dialogBarra: boolean = false;
  montoCajaAbierta: number = 0;
  montoCajaCerrada: number = 0;
  estadoBarra: string = 'Cerrado';

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  @ViewChild('dt') table: Table;

  obtenerMenu() {}

  onClickAperturaCajas() {
    if (!this.cajaAbierta) {
      this.dialogCajaAbierta = true;
      console.log('tocado');
    }
  }

  hideDialogApertura() {
    this.dialogCajaAbierta = false;
    this.montoCajaAbierta = 0;
  }

  hideDialogCerrar() {
    this.montoCajaCerrada = 0;
    this.dialogCajaCerrada = false;
  }

  mensajeSatisfactorioAepertura() {
    this.cajaAbierta = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Monto Apertura Actualizado',
      life: 3000,
    });
    this.dialogCajaAbierta = false;
  }

  mensajeSatisfactorioCerrar() {
    this.cajaCerrada = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Monto de Cierre Actualizado',
      life: 3000,
    });
    this.dialogCajaCerrada = false;
  }

  onClickCerrarCajas() {
    if (!this.cajaCerrada) {
      this.dialogCajaCerrada = true;
      console.log('tocado');
    }
  }

  onClickCambiarEstadoBarra() {
    let nuevoEstado = '';
    if (this.estadoBarra == 'Cerrado') {
      nuevoEstado = 'Abierto';
    } else {
      nuevoEstado = 'Cerrado';
    }

    this.confirmationService.confirm({
      message:
        'Está seguro de querer cambiar el estado de la barra a ' +
        nuevoEstado +
        '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.estadoBarra = nuevoEstado;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Se ha cambiado el estado de la barra',
          life: 3000,
        });
      },
    });
  }
}
