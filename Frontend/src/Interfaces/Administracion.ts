export interface Restaurante {
  _id?: string;
  codigo?: string;
  nombre?: string;
  direccion?: string;
  cantidadClientes?: number;
  telefonoRestaurante?: string;
  activo?: boolean;
  especialidad?: string;
}

export interface Buffet {
  _id?: string;
  codigo?: string;
  nombre?: string;
  precio?: number;
  idTipo?: string;
  descripcionTipo?: string;
  idUnidadMedida?: string;
  descripcionUnidadMedida?: string;
}

export interface Bebidas {
  _id?: string;
  codigo?: string;
  nombre?: string;
  ingredientes?: string;
  precio?: number;
  idRestaurante?: string;
  descripcionRestaurante?: string;
  descripcion?: string;
  urlFotoBebida?: string;
}

export interface Gaseosas {
  _id?: string;
  codigo?: string;
  nombre?: string;
  idMarca?: string;
  descripcionMarca?: string;
  idNacionalidad?: string;
  descripcionNacionalidad?: string;
  precio?: number;
  idRestaurante?: string;
  descripcionRestaurante?: string;
  cantidad?: number;
  descripcion?: string;
  urlFotoBebida?: string;
}

export interface Licores {
  _id?: string;
  codigo?: string;
  nombre?: string;
  idMarca?: string;
  descripcionMarca?: string;
  idNacionalidad?: string;
  descripcionNacionalidad?: string;
  tienePrecioUnitario?: boolean;
  tienePrecioBotella?: boolean;
  precioUnitario?: number;
  precioBotella?: number;
  idRestaurante?: string;
  descripcionRestaurante?: string;
  cantidad?: number;
  descripcion?: string;
  urlFotoBebida?: string;
}

export interface Vinos {
  _id?: string;
  codigo?: string;
  nombre?: string;
  idMarca?: string;
  descripcionMarca?: string;
  idNacionalidad?: string;
  descripcionNacionalidad?: string;
  precioUnitario?: number;
  precioBotella?: number;
  anioCosecha?: string;
  idRestaurante?: string;
  descripcionRestaurante?: string;
  cantidad?: number;
  descripcion?: string;
  urlFotoBebida?: string;
}

export interface Especialidades {
  _id?: string;
  codigo?: string;
  nombrePlatillo?: string;
  ingredientes?: string;
  precio?: number;
  detalle?: string;
  urlFotoPlatillo?: string;
}

export interface Mesas {
  _id?: string;
  codigo?: string;
  nombre?: string;
  numero?: string;
  cantidadSillas?: number;
  idRestaurante?: string;
  descripcionRestaurante?: string;
}

export interface Empleados {
  _id?: string;
  codigo?: string;
  cedula?: string;
  nombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  telefono1?: string;
  telefono2?: string;
  idPuesto?: string;
  descripcionPuesto?: string;
  idNacionalidad?: string;
  descripcionNacionalidad?: string;
  idRestaurante?: string;
  descripcionRestaurante?: string;
  urlFoto?: string;
}

export interface Puestos {
  _id?: string;
  codigo?: string;
  nombre?: string;
  idRol?: string;
  descripcionRol?: string;
  esInterno?: boolean;
  esExterno?: boolean;
}
