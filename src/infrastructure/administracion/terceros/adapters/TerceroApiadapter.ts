import { TerceroApiResult,Tercero } from "../../../../domain/administracion/terceros/entities/tercero";
export class TerceroApiAdapter {
    static ApiToEntity(terceroApiResult: TerceroApiResult): Tercero {
        return {
            nit: terceroApiResult.nit,
            nombre: `${terceroApiResult.primer_nombre} ${terceroApiResult.segundo_nombre} ${terceroApiResult.primer_apellido} ${terceroApiResult.segundo_apellido}`.trim(),
            direccion: terceroApiResult.direccion,
            telefono: terceroApiResult.telefono,
            correo: terceroApiResult.correo,
            tipo: terceroApiResult.tipo.nombre,
            municipio: terceroApiResult.municipio.nombre_municipio,
            actividad_economica: terceroApiResult.ciiu.concepto,
            estado: terceroApiResult.estado,
            regimenes: terceroApiResult.regimenes,
            responsabilidades: terceroApiResult.responsabilidades,
            razon_social: terceroApiResult.razon_social,
            dv: terceroApiResult.dv,
            telefono_movil: terceroApiResult.telefono_movil,
            error: terceroApiResult.error,
            imagen: terceroApiResult.imagen,
        }
    }
}