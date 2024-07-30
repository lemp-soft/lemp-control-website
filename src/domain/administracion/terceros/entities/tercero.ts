import { MunicipioFundamentalData } from "../../../../shared/types/municipio";
import { CiiuFundametalData } from "../../../../shared/types/ciiu";
import { TerceroTipo } from "./tercero_tipo";

export type regimenes = "48 - Responsable del impuesto sobre las ventas - IVA" | "49 - no responsable de IVA";
export type responsabilidades = "O-13 Gran Contribuyente" | "O-15 Autorretenedor" | "O-23 Agente de Retención IVA" | "O-47 Regimen Simple de Tributación" | "R-99-PN No aplica, otros";
export interface TerceroDTO {
    nit: number;
    id_municipio: number;
    tipo: number;
    dv: string;
    primer_apellido: string;
    segundo_apellido?: string;
    primer_nombre: string;
    segundo_nombre?: string;
    razon_social: string;
    direccion: string;
    telefono: string;
    telefono_movil?: string;
    correo: string;
    error?: string;
    imagen?: string;
    clave_acceso?: string;
    clave_firma?: string;
    area?: string;
    cargo?: string;
    creado_en?: Date;
    actualizado_en?: Date;
    eliminado_en?: Date;
    regimenes?: regimenes;
    responsabilidades?: responsabilidades;
    estado: boolean;
    codigo_ciiu: number;
}
// typo que extiende de Tercero pero modifica los campos que son opcionales cambia siguiendo las directrices de la api
export interface TerceroApiResult extends Omit<TerceroDTO, "creado_en" | "actualizado_en" | "eliminado_en" | "tipo" | "id_municipio" | "codigo_ciiu"> {
    tipo: TerceroTipo,
    municipio: MunicipioFundamentalData,
    ciiu: CiiuFundametalData
}
export interface Tercero extends Omit<TerceroDTO, "creado_en" | "actualizado_en" | "eliminado_en" | "tipo" | "id_municipio" | "codigo_ciiu" | "primer_apellido" | "segundo_apellido" | "primer_nombre" | "segundo_nombre"> {
    tipo: string,
    municipio: string,
    actividad_economica: string
    nombre: string
}
export type TerceroCreateDTO = Omit<TerceroDTO, "error" | "imagen" | "clave_acceso" | "clave_firma" | "area" | "cargo" | "creado_en" | "actualizado_en" | "eliminado_en">;
// todos los campos son opcionales
export type TerceroUpdateDTO = Partial<TerceroDTO>;