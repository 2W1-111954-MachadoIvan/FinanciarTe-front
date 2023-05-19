export interface Cuotas {
    idCuota: number;
    idCliente: number;
    idPrestamo: number;
    numeroCuota: number;
    fechaVencimiento: Date;
    montoCuota: number;
    fechaPago: Date;
    montoAbonado: number;
    cuotaVencida: boolean;
    idTransaccion: number;
    idDetalleTransaccion: number;
    idPuntos: number;
}

export interface DTOCuotas{
    idCuota: number;
    idCliente: number;
    idPrestamo: number;
    nroCuota: number;
    fechaVencimiento: Date;
    montoCuota: number;
    fechaPago: Date;
    montoAbonado: number;
    cuotaVencida: string;
    idTransaccion: number;
    idDetalleTransaccion: number;
    idPuntos: number;
}
