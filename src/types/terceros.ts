// nit	bigint(20)	NO
// id_municipio	int(11)	NO
// tipo	int(11)	NO
// dv	varchar(255)	NO
// primer_apellido	varchar(255)	NO
// segundo_apellido	varchar(255)	YES
// primer_nombre	varchar(255)	NO
// segundo_nombre	varchar(255)	YES
// razon_social	varchar(255)	NO
// direccion	varchar(255)	NO
// telefono	varchar(255)	NO
// telefono_movil	varchar(255)	YES
// correo	varchar(255)	NO
// codigo_ciiu	bigint(20) unsigned	YES
// error	text	YES
// imagen	varchar(255)	YES
// clave_acceso	varchar(255)	YES
// clave_firma	varchar(255)	YES
// area	varchar(255)	YES
// cargo	varchar(255)	YES
// creado_en	timestamp	NO
// actualizado_en	timestamp	NO
// eliminado_en	timestamp	YES
// regimenes	enum('48 - Responsable del impuesto sobre las ventas - IVA','49 - no responsable de IVA')	YES
// responsabilidades	enum('O-13 Gran Contribuyente','O-15 Autorretenedor','O-23 Agente de Retención IVA','O-47 Regimen Simple de Tributación','R-99-PN No aplica, otros')	YES
// estado	tinyint(1)	NO
export interface Terceros {
    nit: number;
    id_municipio: number;
    tipo: number;
    dv: number;
    primer_apellido: string;
    segundo_apellido?: string;
    primer_nombre: string;
    segundo_nombre?: string;
    razon_social: string;
    direccion: string;
    telefono: number;
    telefono_movil?: number;
    correo: string;
    codigo_ciiu?: number;
    error?: string;
    imagen?: string;
    clave_acceso?: string;
    clave_firma?: string;
    area?: string;
    cargo?: string;
    creado_en?: Date;
    actualizado_en?: Date;
    eliminado_en?: Date;
    regimenes?: string;
    responsabilidades?: string;
    estado: boolean;
  }
  