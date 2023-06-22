export interface Login {
    usuario: string;
    contrasenia: string;
    roles: string[];
    token: string;
    activo: boolean; 
    nombre: string;
    apellido: string;
    message: string;
    ok: boolean;
    error: string
    codigoEstado: number;
}
