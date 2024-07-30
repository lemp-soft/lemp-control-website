// estructura de base de datos
export interface Municipio {
    codigo: number
    municipio: string
    cod_departamento: number
    cod_postal: string
    cod_municipio: string
}
export interface MunicipioApi extends Omit<Municipio, 'cod_departamento'> {
    departamento: string
}
export interface MunicipioFundamentalData extends Omit<Municipio, 'municipio' | 'cod_postal' | 'cod_municipio' | 'cod_departamento'> {
    nombre: string
}