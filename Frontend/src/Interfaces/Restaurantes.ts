export interface Clientes {
  _id?: string;
  codigoCliente?: string;
  nombre?: string;
  montoPago?: number;
  codigoRestaurante?: number;
  nombreRestaurante?: number;
  horaEntrada?: Date;
  horaSalida?: Date;
  esReservacion?: boolean;
  fechaLlegada?: Date;
  fechaReservacion?: Date;
  esBarra?: boolean;
  numeroMesa?: string;
  pedidos?: Pedido[];
  estadoCuenta?: string;
}

export interface Pedido {
  numeroSilla?: string;
  precioTotal?: number;
  productos?: ProductosPedido[];
}

export interface ProductosPedido {
  tipoProducto?: string;
  idProducto?: string;
}

export interface ProductosMenu {
  nombreProducto: string;
  precio: number;
  categoria: string;
}
