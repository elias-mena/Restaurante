export interface Marcas {
  _id?: string;
  codigo?: string;
  nombre?: string;
  descripcion?: string;
  idNacionalidad?: string;
  descripcionNacionalidad?: string;
  urlFotoMarca?: string;
  cedulaJuridica?: string;
  nombreEmpresa?: string;
  DetalleEmpresa?: string;
  telefono?: string;
  urlFotoEmpresa?: string;
}

export interface Comestibles {
  _id?: string;
  codigo?: string;
  nombre?: string;
  cantidad?: number;
  idTipoComestible?: string;
  descripcionTipoComestible?: string;
  idRestaurante?: string;
  descripcionRestaurante?: string;
  idMarca?: string;
  descripcionMarca?: string;
  idClaseComestible?: string;
  descripcionClaseComestible?: string;
  idLineaComestible?: string;
  descripcionLineaComestible?: string;
  idUnidadMedida?: string;
  descripcionUnidadMedida?: string;
}

export interface Empaques {
  _id?: string;
  codigo?: string;
  nombre?: string;
  cantidad?: number;
  idRestaurante?: string;
  descripcionRestaurante?: string;
  idMarca?: string;
  descripcionMarca?: string;
  descripcion?: string;
}

export interface Limpieza {
  _id?: string;
  codigo?: string;
  idRestaurante?: string;
  descripcionRestaurante?: string;
  nombre?: string;
  idMarca?: string;
  descripcionMarca?: string;
  cantidad?: number;
  descripcion?: string;
  idTipo?: string;
  descripcionTipo?: string;
  cantidadMedida?: string;
  idUnidadMedida?: string;
  descripcionUnidadMedida?: string;
}

export interface Tecnologia {
  _id?: string;
  codigo?: string;
  nombre?: string;
  cantidad?: number;
  idRestaurante?: string;
  descripcionRestaurante?: string;
  idMarca?: string;
  descripcionMarca?: string;
  descripcion?: string;
}

export interface Productos {
  _id?: string;
  codigo?: string;
  nombre?: string;
  cantidad?: number;
  idRestaurante?: string;
  descripcionRestaurante?: string;
  idMarca?: string;
  descripcionMarca?: string;
  descripcion?: string;
}

export interface Proveedores {
  _id?: string;
  codigo?: string;
  cedula?: string;
  fechaIngreso?: Date;
  nombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  correoElectronico?: string;
  direccion?: string;
  oficinaTelefono?: string;
  faxTelefono?: string;
  celularTelefono?: string;
  urlFotoProveedor?: string;
  nombreContacto?: string;
  telefonoContacto?: string;
  direccionContacto?: string;
  productos?: string[];
}
