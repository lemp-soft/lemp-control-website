export type regimenes = "48 - Responsable del impuesto sobre las ventas - IVA" | "49 - no responsable de IVA";
export type responsabilidades = "O-13 Gran Contribuyente" | "O-15 Autorretenedor" | "O-23 Agente de Retención IVA" | "O-47 Regimen Simple de Tributación" | "R-99-PN No aplica, otros";
export interface Tercero {
    nit : number;
    id_municipio : number;
    tipo : number;
    dv : string;
    primer_apellido : string;
    segundo_apellido? : string;
    primer_nombre : string;
    segundo_nombre? : string;
    razon_social : string;
    direccion : string;
    telefono : string;
    telefono_movil? : string;
    correo : string;
    error? : string;
    imagen? : string;
    clave_acceso? : string;
    clave_firma? : string;
    area? : string;
    cargo? : string;
    creado_en? : Date;
    actualizado_en? : Date;
    eliminado_en? : Date;
    regimenes? : regimenes;
    responsabilidades? : responsabilidades;
    estado : boolean;
    codigo_ciiu : number;
}
export type TerceroCreateDTO = Omit<Tercero, "id_municipio" | "tipo" | "error" | "imagen" | "clave_acceso" | "clave_firma" | "creado_en" | "actualizado_en" | "eliminado_en" | "estado">;
// todos los campos son opcionales
export type TerceroUpdateDTO = Partial<Tercero>;