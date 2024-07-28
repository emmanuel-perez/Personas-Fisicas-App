
export interface IPersonaFisica {
    idPersonaFisica: string,
    fechaRegistro: Date,
    fechaActualizacion: Date,
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    rfc: string,
    fechaNacimiento: Date,
    usuarioAgrega: number
}

export interface IPostPersonaFisicaDto {
    fechaRegistro: string,
    fechaActualizacion: string,
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    rfc: string,
    fechaNacimiento: string,
    usuarioAgrega: number
}