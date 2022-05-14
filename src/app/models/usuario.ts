export interface UsuarioLogin {
    usuario?: string;
    password?: string;
}

export interface Usuario {
    id?: string;
    usuario: string;
    password?: string;
    email?: string;
    rolId: string;
}