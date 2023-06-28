export interface Usuario {
    nombres: string;
    apellidos: string;
    calle: string;
    numero: number;
    telefono: number;
    legajo: number;
    usuario: string;
    contraseña: string;
    acitvo: boolean;
    rol: number;
}

export interface TipoUsuario {
    id: number;
    descripcion: string;
}

export interface ComandoUsuario {
    nombre: string,
    apellido: string,
    calle: string,
    numero: number,
    telefono: number,
    legajo: number,
    user: string,
    pass: string,
    idTipoUsuario: number
}

export interface DTOUsuario {
    nombres: string,
    apellidos: string,
    calle: string,
    numero: number,
    telefono: number,
    legajo: number,
    user: string,
    tipoUsuario: number,
    activo: string
}
