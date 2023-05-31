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

export interface ViewCuotaCliente{
    dni: number;
    cliente: string;
    idPrestamo: number;
    cuotaN: number;
    fechaDeVencimiento: Date;
    montoDeCuota: number;
    fechaDePago: Date;
    montoAbonado: number;
    cuotaVencida: string;
    idTransacción: number;
    idDetalleTransacción: number;
    puntosOtorgados: number
}
