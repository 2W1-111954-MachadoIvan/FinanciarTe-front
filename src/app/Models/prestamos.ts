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
    idPrestamo: number;
    idCliente: number;
    montoOtorgado: number;
    estado: string;
    cuotasPagas: string;
    cuotas: DTOCuotas[];
}

