import SelectBasic, { SelectBasicProps } from "../../../common/components/Selects/SelectBasic"
import { useTercerosTipos } from "../hooks"
type Props = Omit<SelectBasicProps, 'options'>
const SelectInputTipoTerceros = (props: Props) => {
    const { data: TercerosTiposData } = useTercerosTipos()
    const options = TercerosTiposData?.map((tipo) => ({ value: tipo.codigo.toString(), label: `${tipo.codigo} - ${tipo.nombre}` })) ?? []
    return (
        <SelectBasic id="tipoTercero" label="Tipo de tercero:" {...props} options={options} />
    )
}

export default SelectInputTipoTerceros