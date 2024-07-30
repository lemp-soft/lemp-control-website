export interface Ciiu {
    codigo: number
    concepto: string
    tarifa_cree: number
    tarifa_ica: number
}
export type CiiuFundametalData = Pick<Ciiu, 'codigo' | 'concepto'>;