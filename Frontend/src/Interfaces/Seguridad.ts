export interface Consecutivos {
  _id?: string;
  codigo?: string;
  idTipo?: string;
  descripcionTipo?: string;
  descripcion?: string;
  valorConsecutivo?: string;
  contienePrefijo?: boolean;
  prefijo?: string;
}

export interface Usuarios {
  _id?: string;
  codigo?: string;
  nombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  telefonoFijo?: string;
  telefonoCelular?: string;
  nickname?: string;
  esAdministrador?: boolean;
  esSeguridad?: boolean;
  esAdminRestaurante?: boolean;
  esAdminCuentas?: boolean;
  idRestaurante?: string;
  contrasenia?: string;
  confirmarContrasenia?: string;
}

export interface Paises {
  _id?: string;
  codigo?: string;
  pais?: string;
  urlBanderaPais?: string;
}

export interface Cajas {
  _id?: string;
  codigo?: string;
  fechaRegistro?: Date;
  descripcion?: string;
  entradaDinero?: number;
  aperturaCaja?: number;
  cierreCaja?: number;
  idRestaurante?: string;
  descripcionRestaurante?: string;
}

export interface Roles {
  _id?: string;
  codigo?: string;
  nombreRol?: string;
  descripcion?: string;
}

export interface UnidadesMedida {
  _id?: string;
  codigo?: string;
  unidadMedida?: string;
  idEscala?: string;
  descripcionEscala?: string;
  idDetalle?: string;
  detalle?: string;
  simbolo?: string;
  simbologia?: string;
}
