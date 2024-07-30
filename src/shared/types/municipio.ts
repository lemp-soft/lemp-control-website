// estructura de base de datos
export interface Municipio {
    codigo: number
    nombre_municipio: string
    cod_departamento: number
    cod_postal: string
    cod_municipio: string
}
export type MunicipioFundamentalData = Pick<Municipio, 'codigo' | 'nombre_municipio'>;