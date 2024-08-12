// codigo	int(11)	NO	PRI
// id_moneda	varchar(5)	NO	MUL
// nit_tercero	bigint(20)	NO	MUL
// estado_empresa	tinyint(1)	YES	
// estado_factura_electronica	tinyint(1)	NO	
// manejo_decimal	tinyint(1)	YES	
// dian_token	varchar(255)	YES	
// dian_usuario_api	varchar(255)	YES	
// dian_contrasena_api	varchar(255)	YES	
// dian_codigo_compania	varchar(255)	YES	
// dian_creacion_token	timestamp	YES	
// dian_codigo_de_operacion	varchar(255)	YES	
// creado_en	timestamp	NO	
// actualizado_en	timestamp	NO	
// eliminado_en	timestamp	YES	
export interface Empresa {
    codigo: number;
    id_moneda: string;
    nit_tercero: number;
    estado_empresa?: boolean;
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
    eliminado_en?: Date;
}
export type EmpresaFundamental = Pick<Empresa, 'codigo' | 'id_moneda' | 'nit_tercero' | 'estado_empresa' | 'estado_factura_electronica'>;
