import { ContactosAlternativos } from "./contactos-alternativos";

export interface Cliente {
  nroDni: number;
  nombres: string;
  apellidos: string;
  FechaNacimiento: Date;
  telefono: number;
  email: string;
  direccion: string;
  numero: number;
  codigoPostal: number;
  idCiudad: number;
  puntosIniciales: number;
  activo: boolean;
  idContactoAlternativo: number;
  contactoAlternativo?: ContactosAlternativos
}

export interface ComandoCliente {
  nroDni: number;
  nombres: string;
  apellidos: string;
  fechaDeNacimiento: Date;
  telefono: number;
  email: string;
  direccion: string;
  numero: number;
  codigoPostal: number;
  idCiudad: number;
  idProvincia?: number;
  puntosIniciales: number;
  activo: boolean;
  idContactoAlternativo: number;
  nombresAlt: string;
  apellidosAlt: string;
  telAlt: number;
  emailAlt: string;
}

export interface DTOCliente {
  nroDni: number;
  nombres: string;
  apellidos: string;
  fechaDeNacimiento: Date;
  telefono: number;
  email: string;
  direccion: string;
  numero: number;
  codigoPostal: number;
  ciudad: number;
  provincia?: number;
  puntosIniciales: number;
  activo: boolean;
  contactoAlternativo: string;
  telAlt: number;
  emailAlt: string;
}
