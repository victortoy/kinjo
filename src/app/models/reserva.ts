import { Usuario } from "./usuario";

export interface Reserva {
    id?: string;
    fecha: Date;
    horaInicio: Date;
    horaFin: Date;
    espacioId: string;
    usuarioId: string;
    usuario?: Usuario;
    estado: string;
    usuarioReservaId: string;
}