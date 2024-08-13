import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form"
import SelectBasic from "../../../common/components/Selects/SelectBasic"
import { TerceroForm } from "./Imputs/InputForm" 
interface SelectInputResponsabilidadesProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    register: <TercerosFormKesy extends keyof TerceroForm>(name: TercerosFormKesy, options?: RegisterOptions<TerceroForm, TercerosFormKesy>) => UseFormRegisterReturn<TercerosFormKesy>
    registerOptions: RegisterOptions<TerceroForm, keyof TerceroForm>
    registerName: keyof TerceroForm
}
const SelectInputResponsabilidades = (props: SelectInputResponsabilidadesProps) => {
    const options = [
        { value: 'O-13 Gran Contribuyente', label: 'O-13 Gran Contribuyente' },
        { value: 'O-15 Autorretenedor', label: 'O-15 Autorretenedor' },
        { value: 'O-23 Agente de Retención IVA', label: 'O-23 Agente de Retención IVA' },
        { value: 'O-47 Regimen Simple de Tributación', label: 'O-47 Regimen Simple de Tributación' },
        { value: 'R-99-PN No aplica, otros', label: 'R-99-PN No aplica, otros' }
    ]
    return (
        <SelectBasic {...props} id="responsabilidad" label="Responsabilidad:" {...props} options={options} />
    )
}

export default SelectInputResponsabilidades