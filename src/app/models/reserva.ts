export interface Reserva {
    id?: string;
    fecha: Date;
    horaInicio: Date;
    horaFin: Date;
    espacioId: string;
    usuarioId: string;
    estado: string;
    usuarioReservaId: string;
}