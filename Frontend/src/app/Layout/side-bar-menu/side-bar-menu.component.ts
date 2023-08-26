import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar-menu.component.html',
})
export class SideBarMenuComponent implements OnInit {
  model: any[] = [];

  esAdminSistema() {
    return true;
    // return this.readCookie('esAdministrador') == 'true';
  }

  esAdminSeguridad() {
    return true;
    // return this.readCookie('esSeguridad') == 'true';
  }

  esAdminRestaurante() {
    return true;
    // return this.readCookie('esAdminRestaurante') == 'true';
  }

  esAdminCuentas() {
    return true;
    // return this.readCookie('esAdminCuentas') == 'true';
  }

  readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }

    return null;
  }

  ngOnInit() {
    this.model = [
      {
        label: 'Administración',
        items: [
          // {
          //   label: 'Restaurantes',
          //   icon: 'pi pi-fw pi-building',
          //   routerLink: ['/Administracion/Restaurantes'],
          //   visible: this.esAdminSistema(),
          // },
          {
            label: 'Restaurante - Piccola Stella',
            icon: 'pi pi-fw pi-building',
            items: [
              {
                label: 'Administración',
                icon: 'pi pi-fw pi-info-circle',
                routerLink: ['/Restaurantes/Dashboard/3'],
                visible: this.esAdminRestaurante(),
              },
              {
                label: 'Clientes Mesas',
                icon: 'pi pi-fw pi-info-circle',
                routerLink: ['/Restaurantes/Clientes'],
                visible: this.esAdminRestaurante(),
              },
              {
                label: 'Clientes Barras',
                icon: 'pi pi-fw pi-info-circle',
                routerLink: ['/Restaurantes/ClientesBarra'],
                visible: this.esAdminRestaurante(),
              },
            ],
          },
          // {
          //   label: 'Restaurante  - Turin Anivo',
          //   icon: 'pi pi-fw pi-building',
          //   items: [
          //     {
          //       label: 'Administración',
          //       icon: 'pi pi-fw pi-info-circle',
          //       routerLink: ['/Restaurantes/Dashboard/1'],
          //       visible: this.esAdminRestaurante(),
          //     },
          //     {
          //       label: 'Clientes Mesas',
          //       icon: 'pi pi-fw pi-info-circle',
          //       routerLink: ['/Restaurantes/Clientes'],
          //       visible: this.esAdminRestaurante(),
          //     },
          //     {
          //       label: 'Clientes Barras',
          //       icon: 'pi pi-fw pi-info-circle',
          //       routerLink: ['/Restaurantes/ClientesBarra'],
          //       visible: this.esAdminRestaurante(),
          //     },
          //   ],
          // },
          // {
          //   label: 'Restaurante - Notte di Fuoco',
          //   icon: 'pi pi-fw pi-building',
          //   items: [
          //     {
          //       label: 'Administración',
          //       icon: 'pi pi-fw pi-info-circle',
          //       routerLink: ['/Restaurantes/Dashboard/2'],
          //       visible: this.esAdminRestaurante(),
          //     },
          //     {
          //       label: 'Clientes Mesas',
          //       icon: 'pi pi-fw pi-info-circle',
          //       routerLink: ['/Restaurantes/Clientes'],
          //       visible: this.esAdminRestaurante(),
          //     },
          //     {
          //       label: 'Clientes Barras',
          //       icon: 'pi pi-fw pi-info-circle',
          //       routerLink: ['/Restaurantes/ClientesBarra'],
          //       visible: this.esAdminRestaurante(),
          //     },
          //   ],
          // },
          {
            label: 'Especiales',
            icon: 'pi pi-fw pi-star-fill',
            items: [
              {
                label: 'Buffet',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Administracion/Especiales/Buffet'],
                visible: this.esAdminSistema(),
              },
              {
                label: 'Bebidas',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Administracion/Especiales/Bebidas'],
                visible: this.esAdminSistema(),
              },
              {
                label: 'Gaseosas',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Administracion/Especiales/Gaseosas'],
              },
              {
                label: 'Licores',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Administracion/Especiales/Licores'],
              },
              {
                label: 'Vinos',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Administracion/Especiales/Vinos'],
              },
              {
                label: 'Especialidades',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Administracion/Especiales/Especialidades'],
                visible: this.esAdminSistema(),
              },
            ],
          },
          {
            label: 'Mesas',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Administracion/Mesas'],
            visible: this.esAdminSistema(),
          },
          {
            label: 'Empleados',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Administracion/Empleados'],
            visible: this.esAdminSistema(),
          },
          {
            label: 'Puestos',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Administracion/Puestos'],
            visible: this.esAdminSistema(),
          },
        ],
      },
      {
        label: 'Proveedores',
        items: [
          {
            label: 'Marcas',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Proveedores/Marcas'],
            visible: this.esAdminSistema(),
          },
          {
            label: 'Productos',
            icon: 'pi pi-fw pi-star-fill',
            items: [
              {
                label: 'Comestibles',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Proveedores/Productos/Comestibles'],
                visible: this.esAdminSistema(),
              },
              {
                label: 'Desechables y Empaques',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Proveedores/Productos/Productos'],
                visible: this.esAdminSistema(),
              },
              {
                label: 'Limpieza e Higiene',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Proveedores/Productos/Limpieza'],
                visible: this.esAdminSistema(),
              },
              {
                label: 'Tecnología',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Proveedores/Productos/Productos'],
                visible: this.esAdminSistema(),
              },
              {
                label: 'Equipos y Utensilios',
                icon: 'pi pi-fw pi-star-fill',
                routerLink: ['/Proveedores/Productos/Productos'],
                visible: this.esAdminSistema(),
              },
            ],
          },
          {
            label: 'Proveedores',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Proveedores/Proveedores'],
            visible: this.esAdminSistema(),
          },
        ],
      },
      // {
      //   label: 'Reportes',
      //   items: [
      //     {
      //       label: 'Bitácora',
      //       icon: 'pi pi-fw pi-star-fill',
      //       routerLink: ['/Reportes/Bitacora'],
      //       visible: this.esAdminSeguridad(),
      //     },
      //     {
      //       label: 'Clientes',
      //       icon: 'pi pi-fw pi-star-fill',
      //       routerLink: ['/Reportes/Clientes'],
      //       visible: this.esAdminSistema(),
      //     },
      //     {
      //       label: 'Facturación',
      //       icon: 'pi pi-fw pi-star-fill',
      //       routerLink: ['/Reportes/Facturacion'],
      //       visible: this.esAdminCuentas(),
      //     },
      //   ],
      // },
      {
        label: 'Seguridad',
        items: [
          {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Seguridad/Usuarios'],
            visible: this.esAdminSeguridad(),
          },
          {
            label: 'Consecutivos',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Seguridad/Consecutivos'],
            visible: this.esAdminSeguridad(),
          },
          {
            label: 'Países',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Seguridad/Paises'],
            visible: this.esAdminSeguridad(),
          },
          {
            label: 'Cajas',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Seguridad/Cajas'],
            visible: this.esAdminCuentas(),
          },
          {
            label: 'Roles/Eventos',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Seguridad/Roles'],
            visible: this.esAdminSeguridad(),
          },
          {
            label: 'Unidades de Medida',
            icon: 'pi pi-fw pi-star-fill',
            routerLink: ['/Seguridad/Unidades-Medida'],
            visible: this.esAdminSeguridad(),
          },
        ],
      },
    ];
  }
}
