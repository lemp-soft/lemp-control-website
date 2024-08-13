import { UseFormSetValue } from "react-hook-form"
import SelectBasic, { SelectBasicProps } from "../../../common/components/Selects/SelectBasic"
import { useTercerosTipos } from "../hooks"
import { TerceroForm } from "./Imputs/InputForm"
import { useEffect } from "react"
type Props = Omit<SelectBasicProps, 'options'> & {
    setValue:UseFormSetValue<TerceroForm>
}
const SelectInputTipoTerceros = (props: Props) => {
    const { data: TercerosTiposData } = useTercerosTipos()
    const options = TercerosTiposData?.map((tipo) => ({ value: tipo.codigo.toString(), label: `${tipo.codigo} - ${tipo.nombre}` })) ?? []
    useEffect(()=>{
        if(options.length > 0){
            props.setValue('tipo',Number(options[0].value))
        }
    },[TercerosTiposData])
    return (
        <SelectBasic id="tipoTercero" label="Tipo de tercero:" {...props} options={options} />
    )
}

export default SelectInputTipoTerceros