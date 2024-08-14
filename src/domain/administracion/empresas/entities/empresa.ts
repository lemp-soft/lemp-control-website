export interface Empresa {
    codigo: number;
    id_moneda: string;
    nit_tercero: number;
    estado_empresa: boolean;
    estado_factura_electronica: boolean;
    manejo_decimal?: boolean;
    dian_token?: string;
    dian_usuario_api?: string;
    dian_contrasena_api?: string;
    dian_codigo_compania?: string;
    dian_creacion_token?: Date;
    dian_codigo_de_operacion?: string;
    creado_en: Date;
    actualizado_en: Date;
}
export interface EmpresaApiResult extends Empresa {}
export interface EmpresaCreateDTO extends Pick<Empresa, "id_moneda" | "nit_tercero"> {}
export type EmpresaUpdateDTO = Partial<Empresa>;
export type EmpresaDTO = EmpresaCreateDTO & EmpresaUpdateDTO;