import { DTOCuotas } from "./cuotas";

export interface Prestamos {
    idPrestamo: number;
    IdCliente: number;
    montoOtorgado: number;
    cuotas:  number;
    diaVencimientoCuota: number;
    idScoring: number;
    indiceInteres: number;
    refinanciaDeuda: boolean;
    idPrestamoRefinanciado: number;
    idTransaccion: number;
}

export interface DTOPrestamo{
    idPrestamo: number;
    idCliente: number;
    montoOtorgado: number;
    estado: string;
    saldoPendiente: number;
    cuotas: DTOCuotas[];
}

export interface DTOListadoPrestamos{
  idPrestamo: number,
  cliente: string,
  dniCliente: number
  indiceFinanciarTe: number,
  scoring: number,
  beneficioScoring: number,
  montoOtorgado: number,
  montoADevolver: number,
  cuotas: number,
  vencimientoPrimeraCuota: Date,
  vencimientoUltimaCuota: Date,
  cuotasPagas: number,
  montoAbonado: number,
  saldoPendiente: number,
  estado: string
}

