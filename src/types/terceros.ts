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
// tipo TerceroUpdate que tiene los mismos campos que Terceros pero todos son opcionales
export type TerceroUpdate = Partial<Terceros>;